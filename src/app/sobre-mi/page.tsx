import { SketchVaso, SketchLine } from "@/components/Gota";

export const metadata = {
  title: "Sobre m\u00ed | Las gotas de mi vaso",
};

export default function SobreMi() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-12">
        <h1 className="text-2xl font-medium tracking-tight">
          Sobre m&iacute;
        </h1>
        <SketchLine className="flex-1 h-2 text-foreground" />
      </div>

      <div className="flex flex-col sm:flex-row gap-10">
        <div className="prose flex-1">
          <p>
            Soy Cristina Alcal&aacute;-Zamora. Trabajo en marketing, me
            fascina la inteligencia artificial y escribo para entenderme y
            para entender el mundo.
          </p>

          <p>
            Fuera de las pantallas me encontrar&aacute;s haciendo yoga, con
            las manos llenas de arcilla en el taller de cer&aacute;mica, o
            simplemente observando c&oacute;mo los animales tienen todo
            much&iacute;simo m&aacute;s claro que nosotros.
          </p>

          <p>
            Siempre hablamos de la gota que colm&oacute; el vaso como algo
            negativo. Pero un vaso tambi&eacute;n se llena de cosas buenas,
            gota a gota. Cada experiencia, cada idea, cada reflexi&oacute;n
            &mdash; todo mueve el nivel del agua.
          </p>

          <p>
            Este blog es mi vaso. Y si alguna de mis gotas mueve un poco el
            nivel del tuyo, te la dejo. Es tuya.
          </p>

          <SketchLine className="w-32 h-2 text-foreground my-8" />

          <p className="text-sm text-muted" style={{ fontFamily: "var(--font-inter)" }}>
            Si quieres hablar, escr&iacute;beme. Las mejores conversaciones
            empiezan con una gota de curiosidad.
          </p>
        </div>

        <div className="flex-shrink-0 flex items-start justify-center sm:justify-end">
          <SketchVaso className="w-28 h-36 text-foreground opacity-40" />
        </div>
      </div>
    </div>
  );
}
