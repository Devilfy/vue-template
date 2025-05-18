<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/ui/kit/card";
</script>

<template>
    <main class="grow flex flex-col pt-[200px] items-center">
        <Card class="w-full max-w-[450px] bg-form">
            <CardHeader>
                <CardTitle>
                    <slot name="title"></slot>
                </CardTitle>
                <CardDescription>
                    <slot name="description"></slot>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <slot name="form"></slot>
            </CardContent>
            <CardFooter>
                <p
                    class="text-sm text-muted-foreground [&_a]:underline [&_a]:text-primary dark:[&_a]:text-primary">
                    <slot name="footer"></slot>
                </p>
            </CardFooter>
        </Card>
    </main>
</template>
