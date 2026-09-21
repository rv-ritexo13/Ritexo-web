import { useParams } from 'react-router-dom'
import { resources, PLACEHOLDER } from '../data/websiteContent'
import PageHeader from '../components/PageHeader'
import CardGrid from '../components/CardGrid'
import DetailView from '../components/DetailView'
import CTASection from '../components/CTASection'

export default function Resources() {
  const { slug } = useParams()

  if (slug) {
    const item = resources.find((s) => s.slug === slug)
    return (
      <DetailView
        item={item}
        basePath="/resources"
        overviewLabel="Resources"
        related={resources}
      />
    )
  }

  return (
    <>
      <PageHeader
        title="Resources"
        subtitle="Insights, updates, and knowledge from Ritexo Technologies."
        crumbs={[{ label: 'Resources' }]}
      />
      <section className="section">
        <div className="container-px">
          <p className="mb-10 max-w-2xl text-navy-600">{PLACEHOLDER.resource}</p>
          <CardGrid items={resources} basePath="/resources" />
        </div>
      </section>
      <CTASection />
    </>
  )
}
