export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    marketing: "marketing",
    ia: "inteligencia artificial",
    reflexiones: "reflexiones",
    aprendizajes: "aprendizajes",
  };
  return labels[category] || category;
}
