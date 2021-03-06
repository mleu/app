# Decision Log
Unsere Entscheidungen werden hier protokolliert.

## 3. Juli 2017
- Bei Pages und Mocks sind alle Members und Methoden `public`, weil nur im Testing Instanzen von ihnen gemacht werden.

## 1. Juli 2017
- Unsere App nennen wir "Arkivar".

## 16. Juni 2017
- Während dem Sprint Review werden den Stakeholdern keine Geräte abgegeben.
- Im Sprint Planning werden auch die gemeinsamen Arbeitszeiten geplant.
- Kein plattformspezifischer Code innerhalb der Applikation. Nur plattformspezifische Providers via Dependency Injection.

## 2. Juni 2017
- Pro Sprint sollte sich jeder 2 Stunden Zeit nehmen um den Code zu lesen.
- Refactorings werden im eigenen Branch committed.
- Vor der Implementierung eines Features wird nach Lösungen ähnlicher Problemen in anderen Projekten gesucht.

## 19. Mai 2017
- Bei jedem Meeting wird im Voraus das Ziel des Meetings und ein Zeitraum (Timebox) definiert.
- Im Sprint Planning werden - falls nötig - Lösungsansätze zur Umsetzung und zum Design eines Backlog Items diskutiert.

## 5. Mai 2017
- Hinter jedem `subscribe()` muss auch ein `catch()` sein.
- Kein Validieren des JSON von der REST API. Wir sehen keine Vorteile für Fehlerbehandlung.
- Wir implementieren keine App-interne Feedback-Funktion; ist durch Ionic View abgedeckt.
- Wir werden [Semantic Versioning](http://semver.org) für Versionierung benutzen.

## 21. April 2017
- Wir verzichten auf die Programmierung von Integration Tests auf eine echte REST Schnittstelle und gehen davon aus, dass sich der IMS Server richtig verhält.
- Unsere App nennen wir "Imagic IMS Mobile Client".

## 7. April 2017
- Issues, welche Code betreffen, werden nicht speziell getagged.
- Alle funktionalen Muss-Kriterien werden im Backlog erfasst.
- Wir testen mit zwei Archivtypen: Polizei und Medizin.
- Wenn ein Issue blockiert ist, muss es mit `blocked` getaggt werden und in der Beschreibung müssen die Blockaden als Checkboxes eingetragen sein.
- Wartet man auf den Abschluss eines Issue, an dem jemand Anderer arbeitet, kann man eine Deadline verlangen.
- Unser Ablauf am Sprint-Ende ist: Demonstration → Issues archivieren → Sprint Retrospektive → Sprint Planning.

## 6. April 2017
- Eingedeutschte englische Wörter werden gross geschrieben.

## 1. April 2017
- Bilder werden vorläufig im Mobile Client nur während dem Upload Prozess zwischengespeichert (keine App-interne Galerie).
- Beim HSR Review übernimmt Michael die Rolle des _Lead Autors_ und Niklaus die Rolle des _Lead Prüfers_.

## 24. März 2017
- Wir entwickeln mit dem Framework Ionic.
- Pro Sprint ist eine Person im Team verantwortlich für die Kommunikation mit Stakeholdern und Betreuer.
- Sprint Backlog und Backlog müssen immer priorisiert sein.

## 22. März 2017
- Namen werden bei Auflistungen alphabetisch nach Vornamen sortiert. Beispiel: **M**ichael Leu, **N**iklaus Tschirky,  **S**andro Zbinden.

## 10. März 2017
- Sobald ein erledigtes Item im Sprint Review besprochen wurde, wird es im Waffle archiviert.
- Issues können auf Done gesetzt und dazugehörige Pull Request gemerged werden, sofern während dem Review für die nicht systemkritischen Änderungen neue Issues erfasst wurden.
- Eine Begründung zu den [Anforderungen in der Spezifikation](spec.md#anforderungskatalog) erstellen wir erst, wenn dafür Bedarf entsteht.

## 24. Februar 2017
- Alle Tasks werden als GitHub Issues erfasst und geplant mit Waffle.
- Code schreiben wir in Englisch.
- Commit Messages & Issues schreiben wir auf Englisch.
- Dokumente spezifisch für die Masterarbeit schreiben wir auf Deutsch.
- Alle anderen Dokumente schreiben wir auf Englisch, weil Auftraggeber auch Internationale Kunden hat.
- Unsere Dokumente schreiben wir im Format Markdown mit `.md` Dateiendung.
- Zeiterfassung machen wir über ein gemeinsames Google Sheet.
- Pull Requests müssen von jemand anderem Reviewed werden, ausser bei der Framework-Evaluation.
- Wir evaluieren drei Frameworks in eigenen GitHub-Repositories, ohne gegenseitige Pull Request Reviews.
- Unser Spezifikations-Dokument soll sich an der Tanksäulen-Spezifikation aus dem Requirements-Engineering Modul orientieren.
- Wir planen in Sprints von zwei Wochen Dauer.
- Jeder kann jederzeit Issues auf GitHub erstellen.
- Reviews haben Priorität vor neuen Tasks.
- Bei gemeinsamen Terminen muss man sich vorgängig abmelden.
- Unser Branching Modell ist [GitHub Flow](https://guides.github.com/introduction/flow/).

## 10. November 2016
- Wir machen kein vollständiges Scrum, dafür sind wir zu wenig Leute und haben keinen PO.
- Unser Entwicklungs-Prozess soll nicht durch unsere Tools vorgegeben werden.
- Wir bevorzugen Tools, welche wir nicht selber betreiben müssen.
