# ims Mobile App

## Vision
Wir möchten es den Kunden von Imagic ims erlauben auf einfache Weise via mobilen Clients digitale Medien (Bilder, Audio, Video, Texte) im IMS System abzuspeichern. Dazu möchten wir eine möglichst plattformunabhängige Mobile-App entwickeln.

![Vision Visualisierung](vision_visualisierung.png)

Die Softwareentwicklung wollen wir Team durchführen. Das Software Projekt soll vom Greenfield durch Konzeption über Architektur bis hin zur Realisation durchgeführt werden.

Die Produkt soll eine generische Open Source Lösung sein, welche das Produktsortiment von IMS erweitert.

Mit Hilfe von Continuous Integration, Reviews und Tests werden wir versuchen eine hohe Softwarequalität zu erreichen, um ein erweiterbares Produkt abzuliefern.

Unser persönliches Ziel ist es unser Wissen um moderne Cross-Platform Frameworks und Tooling zu erweitern. Durch gelungenes Interaction Design möchten wir dem Kunden eine Freude im Alltag bereiten. Auch möchten wir unser Leben erleichtern und eine Continuous Deployment Pipeline aufbauen, damit neue Releases rasch beim Kunden ankommen. 

Am Schluss soll eine funktional vollständige Android und iOS App entstehen, welche in einem Software Repository zum Download bereitgestellt wird. Mit dieser App sollen digitale Medien auf benutzerfreundliche Art und Weise ohne Hürden ins IMS hochgeladen werden können um den Arbeitsalltag der Kunden zu erleichtern. 


## Allgemeine Angaben
### Autor

| Photo        | Name | E-Mail| 
| ------------- |-------------|-------------|
| ![Niklaus Tschirky](niklaus_tschirky.png) |Niklaus Tschirky|niklaus.tschirky@hsr.ch|
| ------------- |Michael Leu|michael.leu@hsr.ch|
| ![Sandor Zbinden](sandro_zbinden.png) |Sandro Zbinden|sandro.zbinden@hsr.ch|


## Einführung
### Zweck
Dieses Dokument Beschreibt die Organisation, Vorgehensweise und die verwendeten Werkzeuge für die Umsetzung des Projekts. Es dient als Einstiegspunkt um sämtliche Projektbezogenen Information zu erhalten.

### Gültigkeitsbereich
Dieses Dokument ist über die ganze Projektdauer gültig. Änderungen werden fortlaufend ergänzt und können in der [Commit History](https://github.com/IMSmobile/app/commits/master/README.md) dieses Dokuments angesehen werden.
### Referenzen
| Link        | Beschreibung |
| ------------- |-------------|
| [Arbeitspakete (Issues)](https://github.com/IMSmobile/app/issues?utf8=%E2%9C%93&q=)      | Arbeitspakete als als Github Issues erfasst und durch Labels Kategorisiert|
| [Kanban Board](https://waffle.io/IMSmobile/app)| Waffle Kanbanboard verknüpft mit Issues zeigt Backlog und Zustand des aktuellen Sprints|
| [Zeiterfassung](https://docs.google.com/spreadsheets/d/1wPmgUyEP-KACbgbScPLBRBLKIGRuS5j_b-cGsaogbYE/edit?usp=sharing)| Google Spreadsheet Dokument zeigt Aufwand der Projektarbeit|
| [Kalender](https://calendar.google.com/calendar/embed?src=3k1v67336orm53otamk6e4s1rc%40group.calendar.google.com&ctz=Europe/Paris) | Google Calendar für die Planung einzelner Ereginissen.
| [Rest Dokumentation](https://sinv-56028.edu.hsr.ch/) | Dokumentation der IMS Rest Schnittstelle.


### Glossar
TBD

## Projekt Übersicht
Durch das Projekt ims Mobile App entsteht eine Applikation um Medien via Mobile Devices im  digitale Bildmangementsystem ims zu sichern. Das Projekt wird im Rahmen einer Masterarbeit von der Hochschule für Technik in Rapperswill [HSR](www.hsr.ch) für den Studiengang MAS Softwareengineering 2015 durchgeführt.

Die Anforderungen sowie auch deren Priorisierung erfolgt von den Firmen Imagic AG und Pic System AG .

Die Firma Imagic bietet Lösungen und Systeme für das digitale Bildmanagement. Dem Kunden werden Tools für die Aufnahme, Bearbeitung, Analyse, Verwaltung und Reporting von Bildmaterial angeboten. Diverse Schnittstellen erlauben die Integration einer Vielzahl Fremdapplikationen. Die Firma Pic Systems vertreibt die Bildmangamgement Lösung und ist für den Vertrieb, Installation und Instandhaltung der Software Lösung im Bereich der Polizei zuständig.

IMS ist ein sehr flexibles Bildmanagement-System, bei welchem Workflows für verschiedene Zwecke erstellt werden können. Dies erlaubt es, dieselbe Code-Basis für verschiedene Kunden-Segmente wie Industrie, Medizin, Life-Sciences und Polizei einzusetzen.

Die primäre Benutzergruppe sind schweizerische Polizeieinheiten. Der neue Client sollte einen einfacheren Prozesses bereitstellen, um Bilder während ihrem täglichen Einsatz auf Streife in ihrem IMS Bildverwaltungssystem abzulegen. Die Lösung sollte offen genug sein um sämtliche Datenmodelle von weiteren Kundensegmenten wie Medizin, Industrie und Life Science abzudecken. Als sekundäre Benutzergruppe sehen wir die Verkäufer der IMS Software welche den Mobile Client zu Demonstrationszwecken nutzen können.

Der Mobile Client soll eine schlanke und bedienerfreundliche Weg sein um nebst dem herkömmlichen IMS Client Daten und den unzähligen technischen Schnittstellen (XML. HL7. Dicom) Medien in das IMS abzuspeichern.

### Lieferumfang

Am Ende des Projekts wird eine Android sowie eine iOS Applikation auf dem Interent für den Download bereit gestellt. Ziel ist es, dass diese Applikation im offiziellen Playstore (Android) Appstore (iOS) öffentlich als kostenelose Applikation heruntergeladen werden kann. Jedoch gibt es keine Garantie dafür, da Applikationen von diesen Stores rejected werden können.

Der Umfang der Applikation ist anhand der [Anforderungsanalyse](docs/spec.md) ersichtlich. Mit Imagic und Pic Systems wurde abgemacht, dass die "muss" Kritieren bis zum Ende der Projektdauer erfüllt sind.

Es ist nicht vorgesehen eine Benutzer Dokumentation zu erstellen, da die Software von IMS Kunden ohne Schulung bediendbar sein sollte.


## Projektorganisation

### Ansprechpartner
Folgende Ansprechpartner stehen während dem Projekt zur Verfügung

| Name        | Firma | Funktion |
| ------------- |-------------|-------------|
| Urs Gomez| Imagic Bildverarbeitung AG | Anforderungen Imagic |
| Marcel Bachmann| Pic Systems AG | Anforderungen Pic System |
| Roland Weber| Ergon AG | Betreuer Masterarbeit |
| Susanne Rigling | HSR | Information Masterarbeit |

### Stakeholder
![Stakeholder](docs/stakeholderdiagram.png)
<<Welche externen Stakeholder/Ansprechpartner sind beteiligt? Wer macht was?>>
### Organisationsstruktur
<<Organigramm>>
### Externe Schnittstellen
TBD

## Risikomanagement

Die Risiken und der Umgang mit Risiken wird druch eine sepeartes Dokument https://github.com/IMSmobile/app/blob/master/docs/risikoanalyse.md beschrieben. 

## Management Abläufe

### Zeitliche Planung
Währen der Projektdauer zwischen 15.02.2017 - 28.08.2017 wird das Projekt in 13 Sprints unterteilt. Jeder Sprint hat einen zeitlichen Aufwand von ca. 93 Stunden.

#### Phasen

| Phase        | Beschreibung | Zeitbereich |
| ------------- |-------------|-------------|
| Anforderungsanalyse und Prototype | Sammeln der Anforderungen von Stakeholdern, evaluieren von verschiedenen Cross-Platform Frameworks | 24.02.2017 - 24.03.2017 |
| Design und Architektur | Erstellung von Interaction Design und Architektur der Software. Einrichten der Tools für das gewählte  Crossplatframework| 24.03.2017 - 07.04.2017 |
| Implementierung | Implementierung der Anforderungen. Anpassen des Design, der Archtitektur und Anforderungen wenn Anpassungen nötig sind. Kontakt mit Stakeholder in 2 Wochen Ryhtmus| 07.04.2017 - 28.08.2017 |
| Implementierung | Implementierung der Anforderungen. Anpassen des Design, der Archtitektur und Anforderungen wenn Anpassungen nötig sind. Kontakt mit Stakeholder in 2 Wochen Ryhtmus| 07.04.2017 - 18.08.2017 |
| Abschluss und Übergabe | Abschliessen der Dokumentation für Abgabe des Projekts. Übergabe des Projekts an Imagic. | 18.08.2017 - 28.08.2017 |
| Präsentation | Vorbereitung und Durchführung der öffentlichen Präsentation | 28.08.2017 - 04.09.2017 |

## Infrastruktur
TBD
## Qualitätsmassnahmen
<<Was wird unternommen damit das Produkt des Projektes, sowie dessen gesamter Verlauf eine hohe Qualität erreicht? Übersicht in einer Tabelle geben mit Massnahmen, Zeitraum und Ziel der Massnahme>>
### Dokumentation
Sämtliche Dokumentationen stehen im öffentlich Zugänglichen [Github Repository](https://github.com/IMSmobile/app/) zur Verfügung. Wie auch beim Quellcode werden allen Änderungen an einem Dokument von einer Person im Sinne eines Reviews überprüft.

### Projektmanagement
<<Welches Tool wird für Projektmanagement eingesetzt (z.B. Redmine oder Trac) und wie erfolgt dieser Einsatz? Dazugehörige Links und Logins (ohne Passwörter).>>
### Entwicklung

Das Projekt wird als Open Source Software unter der MIT Lizenz entwickelt. Der Source Code steht in einem öffentlich Zugänglichen [Github Repository](https://github.com/IMSmobile/app/) zur Verfügung.

#### Vorgehen
Um ein rasches Kundenfeedback zu erhalten und damit wir Abschlussorientiert arbeiten können, wird das Projekt mit agiler Methoden entwickelt.

Alle Entwickler der Applikation stehen hinter dem [Agilen Manifest](http://agilemanifesto.org/iso/de/manifesto.html).

**Individuen und Interaktionen** mehr als Prozesse und Werkzeuge
**Funktionierende Software** mehr als umfassende Dokumentation
**Zusammenarbeit mit dem Kunden** mehr als Vertragsverhandlung
**Reagieren auf Veränderung** mehr als das Befolgen eines Plans

Das heisst, obwohl wir die Werte auf der rechten Seite wichtig finden,
schätzen wir die Werte auf der linken Seite höher ein.

Das Prozessvorgehen orientiert sich stark an Scrum. Die meisten Events und Artefakte wurden direkt vom [Scrum Guide](http://www.scrumguides.org/scrum-guide.html) übernommen. Es gibt jedoch Abweichungen bezüglich dem Scrum Team.

#### Events

Wir führen folgende im Scrum enthaltenen Events wiederholt durch. Da wir nicht jeden Tag und auch nicht zur gleichen Zeit am Projekt arbeiten verzichten wir auf das Daily Scrum Meeting. Informationen zum Zustand und Kommunikation findet via Slack (Messaging System) statt. Wir sind bedacht dass wir Impediments früh zu kommunizieren.

| Event        | Beschreibung | Dauer |
| ------------- |-------------|-------------|
| Sprint        | Zeitdauer in welcher fokussiert an einem Ziel gearbeitet wird, welches Nutzen für den Kunden generiert.    | 2 Wochen |
| Sprint Planning| Festlegen der Arbeit für den nächsten Sprint. | 1.5 Stunden |
| Sprint Review| Demonstration der fertigen Inkremente an Stakeholder / Betreuer. | 1 Stunde |
| Sprint Retrospektive| Analyse desletzten Sprints und definieren der geplanten Verbesserungen. | 1 Stunde |

#### Artefakte
Das Product Backlog sowie der Sprint Backlog kann online in einem [Waffle Kanban Board](https://waffle.io/IMSmobile/app) angesehen werden.

| Artefakt | Beschreibung |
| ------------- |-------------|
| Product Backlog  | Anhand der Anforderungsspezifikation und später durch Kundeninput definierte Arbeitspakete|
| Sprint Backlog  | Arbeitspakete welche innerhalb eines Sprints erledigt werden.|

#### Team
Im Gegensatz zu Scrum gibt es keinen Product Owner. Die Arbeit des Product Owners wird von den Teammitglieder gemeinsam durchgeführt. Die Anforderungen sowie auch die  Priorisierung der Arbeit entsteht durch die Stakeholder.

Auch verzichten wir auf die Rolle des Scrum Master. Impediements werden jeweils sofort im Slack Chat gemeldet und zusammen angeschaut.

#### Code Reviews
<<Werden Code Reviews gemacht und wie werden diese gemacht?>>
#### Code Style Guideline
<<Welche Code Style Guidelines werden angewendet? Sie brauchen keine eigenen Guidelines zu erfinden. Am besten referenzieren Sie existierende Guidelines, mit denen Sie einverstanden sind. Evtl. noch Abweichungen dazu dokumentieren.>>
### Testing
TBD
#### Unit Testing
TBD
#### End to End Testing
TBD
#### Manual Testing
TBD
