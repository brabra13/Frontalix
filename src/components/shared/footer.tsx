export function Footer() {
  return (
    <footer className="py-8 mt-auto border-t border-border/40 bg-background">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Frontalix. Tous droits réservés.</p>
        <p className="mt-1">Votre partenaire expert pour la fiscalité franco-suisse.</p>
      </div>
    </footer>
  );
}
