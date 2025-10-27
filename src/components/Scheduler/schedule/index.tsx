"use client";
import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, View, ToolbarProps } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ptBR from "date-fns/locale/pt-BR";
import { Button } from "~/components/ui/button";
import EventForm from "~/components/Scheduler/eventModal";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { Drawer, DrawerContent } from "~/components/ui/drawer";
import { CalendarEvent } from "~/types/calendar";
import { addDays } from "date-fns";
import { 
  Grid3x3, 
  ChevronLeft, 
  ChevronRight, 
  Rows3,
  Columns3,
  CalendarDays,
  Filter
} from "lucide-react";

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events: CalendarEvent[] = [
  {
    id: 1,
    title: "Reunião de Kickoff do Projeto",
    start: new Date(), // agora
    end: new Date(new Date().getTime() + 60 * 60 * 1000), // daqui 1 hora
    allDay: false,
    timezone: "America/Sao_Paulo",
    recurrence: "weekly",
    recurrenceCustom: "",
    guests: [
      "ana@email.com",
      "carlos@email.com",
      "joao@email.com"
    ],
    videoLink: "https://meet.google.com/abc-defg-hij",
    location: "Sala 101, Prédio Principal",
    color: "#3b82f6",
    description: `<p>Vamos discutir os objetivos do projeto, responsabilidades e próximos passos.</p>
<ul>
  <li>Apresentação do time</li>
  <li>Definição de metas</li>
  <li>Planejamento inicial</li>
</ul>
<p>Documentos importantes estão anexados abaixo.</p>
<a href="https://docs.google.com/document/d/1234567890" target="_blank">Ata da reunião</a>
<img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Imagem do projeto" style="max-width:100%;height:auto;" />
`,
    attachments: [
      "https://docs.google.com/document/d/1234567890",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    ]
  }
];

function CustomToolbar(props: ToolbarProps<CalendarEvent, object>) {
  const { label, onNavigate, onView, view, date } = props;

  // Custom label para semana
  let customLabel = label;
  let monthStr = format(date, "MMMM", { locale: ptBR });
  let monthCapitalized = monthStr.charAt(0).toUpperCase() + monthStr.slice(1); // Capitaliza o mês

  // Semana
  if (view === "week") {
    const start = startOfWeek(date, { locale: ptBR });
    const end = addDays(start, 6);
    const startStr = format(start, "d", { locale: ptBR });
    let endStr = format(end, "d", { locale: ptBR });
    customLabel = `${startStr} à ${endStr} de ${monthCapitalized}`;
  } 
  // Dia
  else if (view === "day") {
    let dayStr = format(date, "d", { locale: ptBR });
    let weekStr = format(date, "EEE", { locale: ptBR });
    let weekCapitalized = weekStr.charAt(0).toUpperCase() + weekStr.slice(1); // Capitaliza o dia da semana
    customLabel = `${weekCapitalized}, ${dayStr} de ${monthCapitalized}`;
  } 
  // Mês
  else if (view === "month") {
    customLabel = monthCapitalized;
  }

  // Função para comparar se está no mesmo dia
  const isToday = () => {
    const now = new Date();
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8 justify-between">

      {/* Navegação do calendário*/}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Button size="icon" variant="ghost" onClick={() => onNavigate("PREV")}>
            <ChevronLeft />
          </Button>
          <span className="font-semibold mx-2 text-3xl">{customLabel}</span>
          <Button size="icon" variant="ghost" onClick={() => onNavigate("NEXT")}>
            <ChevronRight />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <CalendarDays />
          </Button>

          <Button          
            variant="outline"
            onClick={() => onNavigate("TODAY")}
            disabled={isToday()} // Desabilita se já está no dia de hoje
          >
            Hoje
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Filter />
        </Button>

        <div className="flex gap-1 border border-slate-200 rounded-md p-[3px] min-w-[330px]">
          <Button
            className="flex gap-1 w-full"
            variant={view === "month" ? "default" : "ghost"}
            size="xs"
            onClick={() => onView("month")}
          >
            <Grid3x3 />Mês
          </Button>

          <Button
            className="flex gap-1 w-full"
            variant={view === "week" ? "default" : "ghost"}
            size="xs"
            onClick={() => onView("week")}
          >
            <Columns3 />Semana
          </Button>

          <Button
            className="flex gap-1 w-full"
            variant={view === "day" ? "default" : "ghost"}
            size="xs"
            onClick={() => onView("day")}
          >
            <Rows3 />Dia
          </Button>
        </div>
      </div>
      
    </div>
  );
}

// Hook simples para detectar mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}


// Array fixo para garantir acento em "Sáb"
const diasAbreviados = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

// Header customizado para mês
function CustomMonthHeader({ label, date }: { label: string; date: Date }) {
  const numero = format(date, "d", { locale: ptBR });
  const nome = diasAbreviados[date.getDay()];
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-muted-foreground">{nome}</span>
    </div>
  );
}

// Header customizado para semana
function CustomWeekHeader({ label, date }: { label: string; date: Date }) {
  const numero = format(date, "d", { locale: ptBR });
  const nome = diasAbreviados[date.getDay()];
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-base">{numero}</span>
      <span className="text-xs text-muted-foreground">{nome}</span>
    </div>
  );
}

export default function Schedule() {
  const [view, setView] = useState<View>("week");
  const [date, setDate] = useState<Date>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  // Função para salvar (você pode adaptar para salvar no backend)
  const handleSave = (data: CalendarEvent) => {
    // Aqui você pode atualizar o evento no array ou enviar para o backend
    console.log("Evento salvo:", data);
    setOpen(false);
  };

  const isMobile = useIsMobile();

  return (
    <>
      <div className="scheduler flex flex-col h-screen min-h-0 p-4 md:p-8">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          culture="pt-BR"
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          onSelectEvent={handleSelectEvent}
          components={{
            toolbar: CustomToolbar,
            month: { header: CustomMonthHeader },
            week: { header: CustomWeekHeader },
          }}
          style={{ height: "100%" }} // opcional, pode remover
        />
      </div>
      {isMobile ? (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent  className="max-h-[80vh] w-full max-w-none overflow-y-auto">
            {selectedEvent && (
              <EventForm
                event={selectedEvent}
                onSave={handleSave}
                onCancel={() => setOpen(false)}
              />
            )}
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-h-[80vh] w-[700px] max-w-none overflow-y-auto">
            {selectedEvent && (
              <EventForm
                event={selectedEvent}
                onSave={handleSave}
                onCancel={() => setOpen(false)}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}