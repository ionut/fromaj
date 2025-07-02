import Container from "@/components/ui/common/Container";

export default function NotFound() {
  return (
    <Container>
      <p className="text-green font-semibold text-2xl">404</p>
      <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-eerie-black-1 sm:text-6xl">
        Pagina nu a fost găsită
      </h1>
      <p className="mt-6 text-pretty text-lg font-medium text-eerie-black-1/60 sm:text-xl/8">
        Ne pare rău, nu am putut găsi pagina pe care o căutați.
      </p>
      <div className="mt-10">
        <a href="#" className="text-lg font-semibold text-green">
          <span aria-hidden="true">&larr;</span> Înapoi la prima pagină
        </a>
      </div>
    </Container>
  );
}
