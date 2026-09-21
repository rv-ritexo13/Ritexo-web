import { useParams } from 'react-router-dom'
import { services, PLACEHOLDER } from '../data/websiteContent'
import PageHeader from '../components/PageHeader'
import CardGrid from '../components/CardGrid'
import DetailView from '../components/DetailView'
import CTASection from '../components/CTASection'

export default function Services() {
  const { slug } = useParams()

  if (slug) {
    const item = services.find((s) => s.slug === slug)
    return (
      <DetailView
        item={item}
        basePath="/services"
        overviewLabel="Services"
        related={services}
      />
    )
  }

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Technology consulting, managed services, and talent solutions engineered for enterprise growth."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="section">
        <div className="container-px">
          <p className="mb-10 max-w-2xl text-navy-600">{PLACEHOLDER.service}</p>
          <CardGrid items={services} basePath="/services" />
        </div>
      </section>
      <CTASection />
    </>
  )
}
