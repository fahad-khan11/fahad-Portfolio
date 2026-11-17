/**
 * Intro splash — pure CSS (no JS needed to run or dismiss it).
 * Shown once per browser session; skipped for reduced-motion users.
 */
export function Splash() {
  const name = "FAHAD FARMAN"
  return (
    <div id="splash" aria-hidden>
      <div className="splash-lime" />
      <div className="splash-main">
        <div className="cube-wrap">
          <div className="cube">
            {["front", "back", "right", "left", "top", "bottom"].map((f) => (
              <span key={f} className={`cube-face cube-${f}`}>
                FF
              </span>
            ))}
          </div>
        </div>
        <p className="splash-name">
          {name.split("").map((c, i) => (
            <span key={i} style={{ ["--i" as string]: i }}>
              {c === " " ? " " : c}
            </span>
          ))}
        </p>
        <p className="splash-role">Full Stack &amp; AI Engineer</p>
        <div className="splash-foot">
          <div className="splash-bar">
            <span />
          </div>
          <span className="splash-count" />
        </div>
      </div>
    </div>
  )
}
