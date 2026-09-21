import { useParams } from 'react-router-dom'
import { industries, PLACEHOLDER } from '../data/websiteContent'
import PageHeader from '../components/PageHeader'
import CardGrid from '../components/CardGrid'
import DetailView from '../components/DetailView'
import CTASection from '../components/CTASection'

export default function Industries() {
  const { slug } = useParams()

  if (slug) {
    const item = industries.find((s) => s.slug === slug)
    return (
      <DetailView
        item={item}
        basePath="/industries"
        overviewLabel="Industries"
        related={industries}
      />
    )
  }

  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Technology and talent solutions tailored to the needs of every sector."
        crumbs={[{ label: 'Industries' }]}
      />
      <section className="section">
        <div className="container-px">
          <p className="mb-10 max-w-2xl text-navy-600">{PLACEHOLDER.industry}</p>
          <CardGrid items={industries} basePath="/industries" cols="lg:grid-cols-3" />
        </div>
      </section>
      <CTASection />
    </>
  )
}
