import SectionWrapper from '@/components/SectionWrapper'

const AboutPage = () => (
  <SectionWrapper id="about" num="01" title="about_me">
    <div className="grid md:grid-cols-3 gap-10 items-start">
      <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Hi, I&apos;m <span className="text-foreground font-semibold">Aaron</span>! I have a deep passion for
          software development — I love the challenge of turning ideas into functional applications. My
          curiosity drives me to explore new technologies and methodologies, constantly seeking to learn
          and innovate.
        </p>
        <p>
          I thrive on problem-solving and enjoy diving into the latest trends in the tech world. Lately
          I&apos;ve been building tools at the intersection of{' '}
          <span className="text-primary">AI</span>,{' '}
          <span className="text-primary">automation</span>, and{' '}
          <span className="text-primary">web platforms</span> — from MCP integrations and
          Firecrawl-powered scrapers to scheduled lead generators and AI newsletter pipelines.
        </p>
        <p>Always eager to expand my knowledge and embrace every opportunity to grow.</p>
      </div>

      {/* Code-block style info card */}
      <div className="glass glow-border rounded-lg p-5 font-mono text-sm shadow-[var(--shadow-card)]">
        <div className="flex gap-1.5 mb-4">
          <span className="w-3 h-3 rounded-full bg-destructive/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-primary/70" />
        </div>
        <pre className="text-xs leading-relaxed overflow-x-auto text-muted-foreground">
{`const aaron = {
  role: "Software Engineer",
  location: "Utah, USA",
  focus: ["AI", "Automation",
          "Full-Stack"],
  open_to_work: true,
};`}
        </pre>
      </div>
    </div>
  </SectionWrapper>
)

export default AboutPage
