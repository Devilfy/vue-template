import { z } from "zod";

export interface FormFieldProps {
    name: string;
    label?: string;
    type: "text" | "email" | "password" | "number" | "checkbox" | "select" | "textarea";
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    class?: string;
    options?: {
        label: string;
        value: string;
    }[];
}

export interface FormBuilderProps<T extends z.ZodType> {
    fields: FormFieldProps[];
    class?: string;
    submitButton: {
        text: string;
        isLoading: boolean;
        class?: string;
    };
    schema: T;
    onSubmit: (values: z.infer<T>) => Promise<void>;
}
