import { useForm, Controller } from "react-hook-form";
import { FloatingLabelInput } from "~/components/ui/floating-label-input";
import { Button } from "~/components/ui/button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CalendarEvent } from "~/types/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";


function EventForm({
  event,
  onSave,
  onCancel,
}: {
  event: CalendarEvent;
  onSave: (data: CalendarEvent) => void;
  onCancel: () => void;
}) {
  const { register, handleSubmit, control } = useForm<CalendarEvent>({
    defaultValues: event,
  });

  return (
    <form onSubmit={handleSubmit(onSave)} className="flex flex-col h-full relative">
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-2">
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="title" label="Título" />
          )}
        />
        <div className="flex gap-2">
          {/* Início */}
          <Controller
            name="start"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              const value = field.value ? new Date(field.value) : undefined;
              const isValid = value instanceof Date && !isNaN(value.getTime());

              return (
                <>
                  <Input
                    id="startDate"
                    type="date"
                    value={isValid ? value.toISOString().slice(0, 10) : ""}
                    onChange={e => {
                      const date = e.target.value;
                      const time = isValid ? value.toTimeString().slice(0, 5) : "00:00";
                      field.onChange(new Date(`${date}T${time}`));
                    }}
                  />
                  <Input
                    id="startTime"
                    type="time"
                    value={isValid ? value.toTimeString().slice(0, 5) : ""}
                    onChange={e => {
                      const time = e.target.value;
                      const date = isValid ? value.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);
                      field.onChange(new Date(`${date}T${time}`));
                    }}
                  />
                </>
              );
            }}
          />

          <label>até</label>
          
          {/* Fim */}
          <Controller
            name="end"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              const value = field.value ? new Date(field.value) : undefined;
              const isValid = value instanceof Date && !isNaN(value.getTime());

              return (
                <>
                  <Input
                    id="endTime"
                    type="time"
                    value={isValid ? value.toTimeString().slice(0, 5) : ""}
                    onChange={e => {
                      const time = e.target.value;
                      const date = isValid ? value.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);
                      field.onChange(new Date(`${date}T${time}`));
                    }}
                  />
                  <Input
                    id="endDate"
                    type="date"
                    value={isValid ? value.toISOString().slice(0, 10) : ""}
                    onChange={e => {
                      const date = e.target.value;
                      const time = isValid ? value.toTimeString().slice(0, 5) : "00:00";
                      field.onChange(new Date(`${date}T${time}`));
                    }}
                  />
                  
                </>
              );
            }}
          />
        </div>
        <div className="flex items-center gap-2 pt-4">
          <Controller
            name="allDay"
            control={control}
            render={({ field }) => (
              <>
                <Checkbox id="allDay" checked={field.value} onCheckedChange={field.onChange} />
                <label htmlFor="allDay" className="text-sm">Dia inteiro</label>
              </>
            )}
          />
        </div>
        <Controller
          name="timezone"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="timezone" label="Fuso-horário" />
          )}
        />
        <Controller
          name="recurrence"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="recurrence" label="Repetir" />
          )}
        />
        <Controller
          name="guests"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="guests" label="Convidados (e-mails separados por vírgula)" />
          )}
        />
        <Controller
          name="videoLink"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="videoLink" label="Link para videoconferência" />
          )}
        />
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="location" label="Local" />
          )}
        />
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="color" label="Cor" type="color" />
          )}
        />
        <Controller
          name="attachments"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput {...field} id="attachments" label="Anexos (URLs separados por vírgula)" />
          )}
        />
        <div>
          <label className="text-sm mb-1 block">Descrição</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <ReactQuill {...field} theme="snow" />
            )}
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-background border-t flex gap-2 justify-end px-6 py-4 z-50">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}

export default EventForm;