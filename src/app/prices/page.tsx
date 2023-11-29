import PricingCard from "@/components/PricingCard";

export default function page() {
  return (
    <div className="flex items-center justify-center gap-6">
    <PricingCard
      title="Gratis"
      price="0"
      benefits={[
        "Dashboards básicos.",
        "Suporte via e-mail",
        "Atualizações semanais.",
      ]}
    />
    <PricingCard
      title="Premium"
      price="20"
      benefits={[
        "Dashboards básicos.",
        "Suporte via e-mail",
        "Atualizações semanais.",
        "Dashboards Avançados",
        "Suporte dedicado",
        "Atualizações diárias.",
      ]}
      primary
    />
    <PricingCard
      title="Empresas"
      price="50"
      benefits={[
        "Dashboards básicos.",
        "Suporte via e-mail",
        "Atualizações semanais.",
        "Dashboards Avançados",
        "Suporte dedicado 24/7.",
        "Recursos de segurança",
        "Atualizações em tempo real.",
      ]}
    />
  </div>
  )
}
