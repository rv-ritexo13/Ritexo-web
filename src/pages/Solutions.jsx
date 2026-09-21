import { useParams } from 'react-router-dom'
import { solutions, PLACEHOLDER } from '../data/websiteContent'
import PageHeader from '../components/PageHeader'
import CardGrid from '../components/CardGrid'
import DetailView from '../components/DetailView'
import CTASection from '../components/CTASection'

export default function Solutions() {
  const { slug } = useParams()

  if (slug) {
    const item = solutions.find((s) => s.slug === slug)
    return (
      <DetailView
        item={item}
        basePath="/solutions"
        overviewLabel="Solutions"
        related={solutions}
      />
    )
  }

  return (
    <>
      <PageHeader
        title="Our Solutions"
        subtitle="Outcome-focused solutions across digital transformation, technology, and workforce."
        crumbs={[{ label: 'Solutions' }]}
      />
      <section className="section">
        <div className="container-px">
          <p className="mb-10 max-w-2xl text-navy-600">{PLACEHOLDER.solution}</p>
          <CardGrid items={solutions} basePath="/solutions" />
        </div>
      </section>
      <CTASection />
    </>
  )
}
