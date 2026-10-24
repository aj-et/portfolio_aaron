import SectionWrapper from '@/components/SectionWrapper'
import Card_Showcase from '../Card_Showcase'

const TechsPage = () => (
  <SectionWrapper id="stack" num="03" title="techs_used">
    <p className="text-muted-foreground mb-10 font-mono text-sm">
      <span className="text-primary">$</span> cat ~/skills.json
    </p>
    <Card_Showcase />
  </SectionWrapper>
)

export default TechsPage
