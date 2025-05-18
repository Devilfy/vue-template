<script setup lang="ts">
import { Field, useForm } from "vee-validate";
import { ref } from "vue";
import { Eye, EyeOff, Loader2 } from "lucide-vue-next";
import type { FormBuilderProps } from "./form.types";
import { toTypedSchema } from "@vee-validate/zod";
import { cn } from "@/shared/lib/css";
import { Button } from "@/shared/ui/kit/button";
import { Input } from "@/shared/ui/kit/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui/kit/select";
import { Textarea } from "@/shared/ui/kit/textarea";

const props = defineProps<FormBuilderProps<any>>();

const showPassword = ref(false);
const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
};

const { handleSubmit, errors } = useForm({
    validationSchema: toTypedSchema(props.schema),
});

const onSubmit = handleSubmit((values) => {
    props.onSubmit(values);
});

const inputStyles = cn(
    "w-full",
    "bg-input-light dark:bg-input-dark",
    "text-text-light dark:text-text-dark",
    "border border-input-border-light dark:border-input-border-dark",
    "focus:border-input-focus-light dark:focus:border-input-focus-dark",
    "focus:ring-input-focus-light/20 dark:focus:ring-input-focus-dark/20",
    "placeholder:text-input-placeholder-light dark:placeholder:text-input-placeholder-dark",
    "transition-colors duration-200"
);
</script>

<template>
    <form
        @submit="onSubmit"
        :class="cn(props.class)">
        <div class="space-y-4">
            <div
                v-for="field in fields"
                :key="field.name"
                :class="cn('space-y-2', props.class)">
                <div class="w-full">
                    <label
                        v-if="field.label"
                        :for="field.name"
                        class="text-text-light dark:text-text-dark font-medium">
                        {{ field.label }}
                    </label>
                </div>

                <!-- Text, Email, Number inputs -->
                <Field
                    v-if="['text', 'email', 'number'].includes(field.type)"
                    v-slot="{ field: fieldData }"
                    :name="field.name"
                    :rules="field.required ? 'required' : ''">
                    <Input
                        :type="field.type"
                        :id="field.name"
                        v-bind="fieldData"
                        :placeholder="field.placeholder"
                        :disabled="field.disabled"
                        :autofocus="field.autoFocus"
                        :class="inputStyles"
                        :aria-invalid="errors[field.name] ? 'true' : 'false'" />
                </Field>

                <!-- Password input -->
                <div
                    v-else-if="field.type === 'password'"
                    class="relative">
                    <Field
                        v-slot="{ field: fieldData }"
                        :name="field.name"
                        :rules="field.required ? 'required' : ''">
                        <Input
                            :type="showPassword ? 'text' : 'password'"
                            :id="field.name"
                            v-bind="fieldData"
                            :placeholder="field.placeholder"
                            :disabled="field.disabled"
                            :autofocus="field.autoFocus"
                            :class="inputStyles"
                            :aria-invalid="errors[field.name] ? 'true' : 'false'" />
                    </Field>
                    <button
                        type="button"
                        @click="toggleShowPassword"
                        :class="
                            cn(
                                'absolute right-3 top-1/2 -translate-y-1/2',
                                'text-input-placeholder-light dark:text-input-placeholder-dark',
                                'hover:text-text-light/70 dark:hover:text-text-dark/70',
                                'transition-colors duration-200',
                                'cursor-pointer'
                            )
                        ">
                        <EyeOff
                            v-if="showPassword"
                            :size="20" />
                        <Eye
                            v-else
                            :size="20" />
                    </button>
                </div>

                <!-- Checkbox input -->
                <Field
                    v-else-if="field.type === 'checkbox'"
                    v-slot="{ field: fieldData }"
                    :name="field.name"
                    :rules="field.required ? 'required' : ''">
                    <Input
                        type="checkbox"
                        :id="field.name"
                        v-bind="fieldData"
                        :disabled="field.disabled"
                        :class="
                            cn(
                                'h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary',
                                field.class
                            )
                        "
                        :aria-invalid="errors[field.name] ? 'true' : 'false'" />
                </Field>

                <!-- Select input -->
                <Field
                    v-else-if="field.type === 'select'"
                    v-slot="{ field: fieldData }"
                    :name="field.name"
                    :rules="field.required ? 'required' : ''">
                    <Select
                        v-bind="fieldData"
                        :disabled="field.disabled"
                        :aria-invalid="errors[field.name] ? 'true' : 'false'">
                        <SelectTrigger>
                            <SelectValue :placeholder="field.placeholder" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem
                                    v-for="option in field.options"
                                    :key="option.label"
                                    :value="option.value || option.label">
                                    {{ option.label }}
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>

                <!-- Textarea input -->
                <Field
                    v-else-if="field.type === 'textarea'"
                    v-slot="{ field: fieldData }"
                    :name="field.name"
                    :rules="field.required ? 'required' : ''">
                    <Textarea
                        :id="field.name"
                        v-bind="fieldData"
                        :class="cn(inputStyles, 'min-h-[60px]')"
                        :aria-invalid="errors[field.name] ? 'true' : 'false'" />
                </Field>

                <!-- Error message -->
                <p
                    v-if="errors[field.name]"
                    class="text-destructive text-sm mt-1">
                    {{ errors[field.name] || "Invalid field" }}
                </p>
            </div>
        </div>

        <Button
            type="submit"
            :class="
                cn(
                    submitButton.class,
                    'w-full mt-6 h-10 bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-light/90 dark:hover:bg-primary-dark/90'
                )
            "
            :disabled="submitButton.isLoading">
            <Loader2
                v-if="submitButton.isLoading"
                class="w-4 h-4 animate-spin" />
            <template v-else>{{ submitButton.text }}</template>
        </Button>
    </form>
</template>
@/shared/ui/kit/button
