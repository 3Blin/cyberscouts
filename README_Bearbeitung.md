# Anleitung zur Bearbeitung der CyberScouts Website

Diese Anleitung erklärt, wie du die Inhalte der CyberScouts OnePager-Website bearbeiten kannst, die auf einfachem HTML und CSS basiert und für die Pflege über GitHub und Netlify optimiert ist.

## 1. Grundstruktur verstehen

Die Website ist ein OnePager, d.h., alle Inhalte befinden sich in der `index.html`-Datei. Die Gestaltung wird über die `styles.css`-Datei gesteuert. Bilder und Schriftarten liegen im `assets`-Ordner.

- **`index.html`**: Enthält die gesamte Struktur und die Texte der Website. Die Seite ist in Abschnitte (sections) unterteilt (z.B. `<section id="about">`, `<section id="modules">`).
- **`styles.css`**: Definiert das Aussehen (Farben, Schriftarten, Layout, Responsivität).
- **`assets/`**: Enthält Unterordner für Bilder (`assets/images/` - *bitte erstellen, falls benötigt*) und Schriftarten (`assets/fonts/`).
- **`assets/fonts/fonts.css`**: Bindet die benutzerdefinierte Schriftart `NeuropoliticalRg-Regular` ein.
- **`assets/fonts/NeuropoliticalRg-Regular.otf`**: Die Schriftdatei.

## 2. Texte ändern

Texte änderst du direkt in der `index.html`-Datei.

1.  Öffne die `index.html` in einem Texteditor oder direkt auf GitHub.
2.  Suche den Textabschnitt, den du ändern möchtest. Die Abschnitte sind durch HTML-Tags wie `<h1>`, `<p>`, `<li>` etc. strukturiert und oft durch Kommentare oder `id`-Attribute gekennzeichnet (z.B. `<!-- About Section -->` oder `<section id="about">`).
3.  Bearbeite den Text zwischen den öffnenden und schließenden Tags (z.B. `<p>Hier steht der Text</p>`).
4.  Speichere die Änderungen. Wenn du über GitHub arbeitest, committe die Änderungen.

**Beispiel:** Um den Einleitungstext im "Über uns"-Abschnitt zu ändern, suche nach `<section id="about">` und bearbeite den Text innerhalb der `<p>`-Tags.

## 3. Bilder einfügen oder ändern

1.  **Bild vorbereiten**: Stelle sicher, dass dein Bild für das Web optimiert ist (passende Größe, komprimiertes Format wie .jpg, .png, .webp oder .svg).
2.  **Bild hochladen**: Lade das Bild in den `assets/`-Ordner (oder einen Unterordner wie `assets/images/`, den du erstellen kannst) in deinem GitHub-Repository hoch.
3.  **Bild in HTML einbinden**: Suche die Stelle in der `index.html`, an der das Bild erscheinen soll. Verwende das `<img>`-Tag:
    ```html
    <img src="assets/images/dein-bildname.jpg" alt="Eine Beschreibung des Bildes">
    ```
    - Ersetze `assets/images/dein-bildname.jpg` mit dem korrekten Pfad und Dateinamen deines Bildes.
    - Gib im `alt`-Attribut eine kurze, aussagekräftige Beschreibung des Bildes an (wichtig für Barrierefreiheit und SEO).
4.  **Bild ändern**: Um ein bestehendes Bild zu ersetzen, ändere einfach den `src`-Wert im entsprechenden `<img>`-Tag auf den Pfad des neuen Bildes.
5.  Speichere und committe die Änderungen.

## 4. Veranstaltungskalender integrieren (Google Kalender)

Die Integration eines Google Kalenders erfolgt typischerweise über einen Einbettungscode (iframe), den Google Kalender bereitstellt.

1.  **Google Kalender vorbereiten**: 
    - Gehe zu deinem Google Kalender.
    - Stelle sicher, dass der Kalender, den du einbetten möchtest, öffentlich freigegeben ist (oder zumindest für die Personen, die ihn sehen sollen).
    - Gehe zu den Einstellungen des Kalenders.
    - Suche nach der Option "Kalender integrieren" oder "Integrate calendar".
2.  **Einbettungscode kopieren**: 
    - Dort findest du einen HTML-Code, der mit `<iframe src="...">` beginnt.
    - Passe ggf. die Darstellungseinstellungen (Größe, Ansicht etc.) direkt in den Google Kalender-Einstellungen an.
    - Kopiere den gesamten `<iframe>`-Code.
3.  **Code in HTML einfügen**:
    - Öffne die `index.html`.
    - Suche den Abschnitt, in dem der Kalender erscheinen soll. Ich habe einen Platzhalter-Abschnitt mit der ID `events` vorbereitet:
      ```html
      <section id="events" class="section">
        <div class="container">
          <h2>Kommende <span>Events</span></h2>
          <div class="calendar-placeholder">
            <!-- Hier den Google Kalender iframe-Code einfügen -->
            
          </div>
        </div>
      </section>
      ```
    - Füge den kopierten `<iframe>`-Code innerhalb des `<div class="calendar-placeholder">` (oder direkt in den Container, falls du den Platzhalter nicht möchtest) ein.
4.  **Styling anpassen (optional)**:
    - Der `<iframe>` hat Standardattribute für Breite (`width`) und Höhe (`height`). Du kannst diese Werte im Code anpassen.
    - Für eine responsive Darstellung kannst du dem `<iframe>` in der `styles.css` zusätzliche Stile geben, z.B.:
      ```css
      #events iframe {
        width: 100%; /* Passt sich der Breite des Containers an */
        min-height: 500px; /* Mindesthöhe */
        border: none; /* Entfernt den Standardrahmen */
        border-radius: 8px; /* Optional: abgerundete Ecken */
      }
      ```
5.  Speichere und committe die Änderungen.

## 5. Änderungen live stellen (Netlify)

Da die Seite bereits mit Netlify verbunden ist und über GitHub gepflegt wird:

-   Sobald du Änderungen an deinem GitHub-Repository (im Hauptbranch, z.B. `main` oder `master`) committest und pushst, sollte Netlify automatisch erkennen, dass es neue Änderungen gibt.
-   Netlify wird dann den Build- und Deployment-Prozess starten und die aktualisierte Website live schalten. Du musst normalerweise nichts weiter tun.

Bei Fragen oder Problemen stehe ich gerne zur Verfügung!
