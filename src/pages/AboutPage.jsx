import me from "../assets/me.png";
import useTheme from "../contexts/theme";
import Timeline from "../sections/Timeline/Timeline";
import LazyImage from "../components/LazyImage/LazyImage";

function AboutPage() {
  const { themeMode } = useTheme();
  return (
    <div id="about-page" className={`about-${themeMode}`}>
      <p className="about-header">So, who am I ? Bear with me.</p>
      <div className="intro">
        <div className="intro-left">
          <LazyImage
            src={me}
            alt="Sohaib Aftab - Computer Science Student"
            loading="lazy"
            placeholder={
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#f0f0f0",
                }}
              ></div>
            }
          />
        </div>
        <div className="intro-right">
          <p className="title">I am Sohaib Aftab.</p>
          <p className="body">
            I am an Engineering student pursuing B.Tech. in Computer Science and
            Engineering at the Indian Institute of Information Technology,
            Design and Manufacturing Kurnool, Andhra Pradesh.
          </p>
        </div>
      </div>
      <div className="story">
        <p className="story-title">My Story</p>
        <p className="story-body">
          I was exposed to various tech gadgets very early on in life, which
          instilled a keen interest in me for Technology. In my{" "}
          <span>8th standard</span>, I taught myself my first programming
          language, <span> Java</span>. But I quickly realized there’s only so
          much I can self-teach myself. So I decided to make a career in Tech.
        </p>
        <p className="story-body">
          In 2022, I joined IIITDM Kurnool and pursued my dream of becoming a
          <span> Software Engineer</span>. I had taken up <span> Python </span>
          during my +2 in CBSE. So, I quickly grasped some basic CS concepts
          during my first year and became a <span>MERN</span> developer.
        </p>
        <p className="story-body">
          Even as a child, my motivation behind learning Programming was to
          build things that I can use or enjoy. I was always fascinated by{" "}
          <span>creation</span>. That continues even today, and I have worked on
          various freelance and personal projects that either support a
          business, or make lives easier for people.
        </p>
        <p className="story-body">
          Presently, I am making myself fluent in{" "}
          <span>Data Structures and Algorithms</span> to improve my problem
          solving skills so I can build more efficient and better products. I am
          also getting my hands dirty in <span>Machine Learning</span> and
          Cross-Platform Development. I will leave you a brief about my
          educational background in case you,
        </p>
      </div>
      <Timeline />
    </div>
  );
}

export default AboutPage;
