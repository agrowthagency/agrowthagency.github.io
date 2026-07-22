#!/usr/bin/env python3
"""Rewrite recurring jargon in blog Markdown as plain business English."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


HEADING_REPLACEMENTS = {
    "Signals to check first": "What to check first",
    "A responsible response process": "What to do next",
    "Controls to reduce recurrence": "How to prevent the problem from happening again",
    "Design portable architecture": "Make sure the client can take over",
    "Test before the relationship is urgent": "Test access before a problem happens",
    "Offboard with deletion as well as delivery": "Transfer the assets and remove old access",
    "Use a composite portability case": "What can go wrong when a client changes agencies",
    "Classify the decision object": "Identify exactly what the platform restricted",
    "Decompose the claim": "Break down the claim",
    "Map the control surface before hardening it": "List every access point before securing the account",
    "A suspension is an entity-risk decision": "A suspension can involve the advertiser, not only one ad account",
    "Build a canonical client record": "Keep one reliable client record",
    "The future of compliance is systems design": "Good compliance depends on how the business works every day",
    "Use a composite case": "A practical example",
    "Use a composite agency case": "A practical agency example",
    "A composite scenario: the appeal that changed every time": "Example: an appeal that changed every time",
    "A composite scenario: legitimate spend, fragmented finance": "Example: legitimate spending with inconsistent payment records",
    "A composite scenario: the landing page nobody owned": "Example: a landing page with no clear owner",
    "A composite scenario: three teams, three meanings of “banned”": "Example: three teams using “banned” to mean different things",
    "A composite scenario: the legitimate login that became a portfolio incident": "Example: a legitimate login that affected several accounts",
    "A composite scenario: the compliant ad with an incoherent advertiser": "Example: a compliant ad with inconsistent business information",
    "A composite scenario: valid documents, unverifiable business": "Example: valid documents but an unclear business",
    "A composite scenario: available funds, incoherent authority": "Example: available funds but unclear payment authority",
    "A composite scenario: the agency that became the advertiser": "Example: when the agency appears to be the advertiser",
    "A composite scenario: the URL nobody owned": "Example: a URL with no clear owner",
    "A composite scenario: fifty ads, one redirect": "Example: fifty ads affected by one redirect",
    "A composite scenario: six accurate teams, one misleading offer": "Example: several accurate teams producing one misleading offer",
}


PHRASE_REPLACEMENTS = [
    (r"\bcomposite scenario\b", "hypothetical example"),
    (r"\bcomposite example\b", "hypothetical example"),
    (r"\bcomposite case\b", "hypothetical example"),
    (r"\boperating model\b", "way the account is managed"),
    (r"\boperating system\b", "working process"),
    (r"\bgovernance framework\b", "management guide"),
    (r"\bgovernance model\b", "management approach"),
    (r"\bgovernance\b", "management"),
    (r"\bgoverned\b", "managed"),
    (r"\bgoverning\b", "managing"),
    (r"\bgovern\b", "manage"),
    (r"\bdecision object\b", "item affected by the decision"),
    (r"\benforcement object\b", "item affected by enforcement"),
    (r"\benforcement taxonomy\b", "list of enforcement categories"),
    (r"\btaxonomy\b", "list of categories"),
    (r"\bappeal surface\b", "parts reviewed in an appeal"),
    (r"\bcontrol surface\b", "areas that need protection"),
    (r"\bidentity coherence\b", "consistent identity information"),
    (r"\bcoherent\b", "consistent"),
    (r"\bincoherent\b", "inconsistent"),
    (r"\bmaterial truth\b", "important facts"),
    (r"\bevidence packet\b", "set of supporting evidence"),
    (r"\bevidence pack\b", "set of supporting evidence"),
    (r"\bcanonical client record\b", "single reliable client record"),
    (r"\bcanonical record\b", "single reliable record"),
    (r"\bcommercial proposition\b", "commercial offer"),
    (r"\bproposition\b", "offer"),
    (r"\bdue diligence\b", "careful checks"),
    (r"\bdiligence process\b", "checking process"),
    (r"\bdiligence\b", "checks"),
    (r"\bupstream provider\b", "provider earlier in the supply chain"),
    (r"\bupstream providers\b", "providers earlier in the supply chain"),
    (r"\bupstream dependency\b", "dependency on another provider"),
    (r"\bupstream dependencies\b", "dependencies on other providers"),
    (r"\bdownstream dependencies\b", "connected systems that depend on it"),
    (r"\bdownstream dependency\b", "connected system that depends on it"),
    (r"\bbilling architecture\b", "billing setup"),
    (r"\bdata architecture\b", "data setup"),
    (r"\bsecurity architecture\b", "security setup"),
    (r"\btechnical architecture\b", "technical setup"),
    (r"\barchitecture\b", "setup"),
    (r"\breconciliation process\b", "process for checking records and correcting differences"),
    (r"\breconciliation\b", "checking records for differences"),
    (r"\bremediation plan\b", "plan to fix the problem"),
    (r"\bremediation\b", "corrective work"),
    (r"\brecurrence\b", "the same problem happening again"),
    (r"\bblast radius\b", "number of accounts that could be affected"),
    (r"\bprivileged access\b", "administrator access"),
    (r"\bprivileged paths\b", "administrator access paths"),
    (r"\bprivileged duties\b", "sensitive administrator tasks"),
    (r"\bprivilege changes\b", "administrator access changes"),
    (r"\bprivileges\b", "access rights"),
    (r"\bprivilege\b", "access right"),
    (r"\bshared credentials\b", "shared login details"),
    (r"\bcredentials\b", "login details"),
    (r"\bcredential\b", "login detail"),
    (r"\baccount provenance\b", "account origin and ownership history"),
    (r"\bprovenance\b", "origin and ownership history"),
    (r"\bprefunding\b", "advance funding"),
    (r"\bsegregation\b", "separation"),
    (r"\bbusiness continuity\b", "ability to keep the business running"),
    (r"\bservice continuity\b", "ability to keep the service running"),
    (r"\boperational continuity\b", "ability to keep operating"),
    (r"\bcontinuity risk\b", "risk of interrupted operations"),
    (r"\bcontinuity\b", "ability to keep operating"),
    (r"\bcadence\b", "schedule"),
    (r"\bcounterparty risk\b", "risk that the other party cannot meet its obligations"),
    (r"\bcounterparty\b", "other party"),
    (r"\bsystem of record\b", "main source of information"),
    (r"\boperational evidence\b", "evidence from real operations"),
    (r"\boperational process\b", "working process"),
    (r"\boperational state\b", "current working state"),
    (r"\boperational risk\b", "practical risk"),
    (r"\boperational\b", "practical"),
    (r"\bframework\b", "guide"),
    (r"\broot-cause analysis\b", "analysis of the underlying cause"),
    (r"\broot cause\b", "underlying cause"),
    (r"\bversioned incident\b", "incident with a clear change history"),
]


POST_REPLACEMENTS = [
    (r"\bchecking records for differences\b", "reconciliation"),
    (r"\bthe same problem happening again\b", "repeat issue"),
    (r"\bability to keep operating planning\b", "planning to keep operations running"),
    (r"\bclient ability to keep operating planning\b", "planning to keep the client operating"),
    (r"\bclient ability to keep operating controls\b", "steps that let the client keep operating"),
    (r"\bblocks ability to keep operating\b", "blocks the client from continuing its work"),
    (r"\bportfolio way the account is managed\b", "portfolio management approach"),
    (r"\bidentity reconciliation\b", "checking that identity information matches"),
    (r"\bfinancial reconciliation\b", "checking and correcting the payment records"),
    (r"\bSet reconciliation alerts\b", "Set alerts for differences between billing records"),
    (r"\bPerform a monthly reconciliation across\b", "Every month, compare"),
    (r"\bmust checks\b", "must check"),
    (r"\bcannot checks\b", "cannot check"),
    (r"\bcan checks\b", "can check"),
    (r"\bshould checks\b", "should check"),
    (r"\bcould checks\b", "could check"),
    (r"\bwill checks\b", "will check"),
    (r"\bmay checks\b", "may check"),
    (r"\bNone checks\b", "No one checks"),
    (r"\ban setup\b", "a setup"),
    (r"\ban practical\b", "a practical"),
    (r"\ban working\b", "a working"),
    (r"\ba underlying\b", "an underlying"),
    (r"\bImportant facts that appears\b", "Important facts that appear"),
    (r"\bincreases number of accounts that could be affected\b", "increases the number of accounts that could be affected"),
    (r"\boperationally useless\b", "useless in practice"),
    (r"\boperationally incomplete\b", "incomplete in practice"),
    (r"\boperationally misleading\b", "misleading in practice"),
    (r"\boperationally different\b", "different in practice"),
    (r"\boperationally important\b", "important in practice"),
    (r"\boperationally justified\b", "justified in practice"),
    (r"\boperationally indistinguishable\b", "indistinguishable in practice"),
    (r"\boperationally inadequate\b", "inadequate in practice"),
    (r"\boperationally ineligible\b", "ineligible in practice"),
    (r"\boperationally limited\b", "limited in practice"),
    (r"\bOperationally,\b", "In practice,"),
    (r"\bscoped access\b", "only the access it needs"),
    (r"\bexport and reconstruction runbooks\b", "clear instructions for exporting the data and setting the system up again"),
    (r"\bsuccessor usability\b", "whether a new agency can use it"),
    (r"\bOperationally,\s*", "In practice, "),
    (r"\boperationally\b", "in practice"),
    (r"\bunit of corrective work\b", "fix"),
    (r"\bcorrective work owner\b", "person responsible for the fix"),
    (r"\bcorrective work ownership\b", "responsibility for the fix"),
    (r"\bcorrective work is\b", "fix is"),
    (r"\bcorrective work requires\b", "fix requires"),
    (r"\bcomplete corrective work\b", "complete fixes"),
    (r"\bcompleted corrective work\b", "completed fixes"),
    (r"\bcorrective work\b", "fixes"),
    (r"\broot-cause domain\b", "area containing the underlying cause"),
    (r"\bevidence graph\b", "full set of evidence"),
    (r"\baffected surface\b", "affected areas"),
    (r"\buniversal access right\b", "access to every account"),
]


def preserve_case(source: str, replacement: str) -> str:
    if source.isupper():
        return replacement.upper()
    if source[:1].isupper():
        return replacement[:1].upper() + replacement[1:]
    return replacement


def protect_links(text: str) -> tuple[str, list[str]]:
    protected: list[str] = []
    pattern = re.compile(r"(?<=\]\()(?:[^()\s]+)(?=\))|https?://[^\s)>]+")

    def store(match: re.Match[str]) -> str:
        protected.append(match.group(0))
        return f"@@PLAINLINK{len(protected) - 1}@@"

    return pattern.sub(store, text), protected


def restore_links(text: str, protected: list[str]) -> str:
    for index, value in enumerate(protected):
        text = text.replace(f"@@PLAINLINK{index}@@", value)
    return text


def rewrite_heading(line: str) -> str:
    if not line.startswith("## "):
        return line
    heading = line[3:].strip()
    if heading in HEADING_REPLACEMENTS:
        return "## " + HEADING_REPLACEMENTS[heading]
    heading = re.sub(r"^What (.+) usually means$", r"What \1 means", heading)
    heading = re.sub(r"^Use a composite .+$", "A practical example", heading)
    heading = re.sub(r"^A composite scenario:\s*", "Example: ", heading)
    heading = re.sub(r"^A composite case:\s*", "Example: ", heading)
    heading = re.sub(r"^Govern (.+)$", r"Manage \1", heading)
    heading = re.sub(r"^Diligence (.+)$", r"Check \1 carefully", heading)
    heading = re.sub(r"^Establish (.+)$", r"Set \1", heading)
    heading = re.sub(r"^Maintain (.+)$", r"Keep \1", heading)
    heading = re.sub(r"^Preserve (.+)$", r"Keep \1", heading)
    heading = re.sub(r"^Obtain (.+)$", r"Get \1", heading)
    return "## " + heading


def rewrite_body(body: str) -> str:
    rewritten_lines: list[str] = []
    in_fence = False

    for original_line in body.splitlines():
        if original_line.startswith("```"):
            in_fence = not in_fence
            rewritten_lines.append(original_line)
            continue
        if in_fence or original_line.startswith("| ---"):
            rewritten_lines.append(original_line)
            continue

        line = rewrite_heading(original_line)
        protected_line, links = protect_links(line)
        for pattern, replacement in PHRASE_REPLACEMENTS:
            protected_line = re.sub(
                pattern,
                lambda match, value=replacement: preserve_case(match.group(0), value),
                protected_line,
                flags=re.IGNORECASE,
            )
        for pattern, replacement in POST_REPLACEMENTS:
            protected_line = re.sub(pattern, replacement, protected_line, flags=re.IGNORECASE)
        rewritten_lines.append(restore_links(protected_line, links))

    return "\n".join(rewritten_lines) + ("\n" if body.endswith("\n") else "")


def split_frontmatter(text: str) -> tuple[str, str]:
    match = re.match(r"\A(---\r?\n.*?\r?\n---\r?\n)(.*)\Z", text, re.DOTALL)
    if not match:
        raise ValueError("Missing or invalid YAML frontmatter")
    return match.group(1), match.group(2)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", type=Path)
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()

    changed = 0
    for path in sorted(args.root.rglob("*.md")):
        original = path.read_text(encoding="utf-8")
        frontmatter, body = split_frontmatter(original)
        updated = frontmatter + rewrite_body(body)
        if updated == original:
            continue
        changed += 1
        print(path)
        if args.write:
            path.write_text(updated, encoding="utf-8", newline="\n")

    print(f"Changed files: {changed}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
