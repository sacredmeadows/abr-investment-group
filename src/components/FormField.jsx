import React from "react";

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  error,
  as = "input"
}) {
  const Component = as;

  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-ink-700">
        {label} {required ? <span className="text-ink-500">(required)</span> : null}
      </label>

      <Component
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={
          "mt-2 w-full rounded-xl border border-black/15 bg-white px-3 py-2.5 text-sm " +
          "placeholder:text-ink-400 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition " +
          "focus:border-black/30 focus:ring-2 focus:ring-black/10 " +
          (error ? "border-black/35 ring-2 ring-black/10" : "")
        }
        rows={as === "textarea" ? 4 : undefined}
      />

      {error ? <p className="mt-2 text-xs text-ink-600">{error}</p> : null}
    </div>
  );
}