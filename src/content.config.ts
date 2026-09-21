import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// Leistungen: ein Markdown-File pro Leistung, Body = Detailtext.
const leistungen = defineCollection({
	loader: glob({ base: './src/content/leistungen', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		order: z.number().default(0),
		bilder: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string().default(''),
				}),
			)
			.default([]),
	}),
});

// Singleton: eine YAML-Datei mit genau einem Eintrag unter dem Key "firmenprofil".
const firmenprofil = defineCollection({
	loader: file('src/content/firmenprofil.yaml'),
	schema: z.object({
		companyName: z.string(),
		inhaber: z.string(),
		street: z.string(),
		postalCode: z.string(),
		city: z.string(),
		phone: z.string(),
		email: z.string().email(),
		steuerNummer: z.string(),
		ustIdNr: z.string(),
		notdienstActive: z.boolean().default(false),
		notdienstNumber: z.string().default(''),
		openingHours: z.string().default(''),
	}),
});

// Singleton: alle Texte der Startseite.
const startseite = defineCollection({
	loader: file('src/content/startseite.yaml'),
	schema: z.object({
		heroTopLabel: z.string(),
		heroHeadline: z.string(),
		heroSubheadline: z.string(),
		heroStatBox: z.string(),
		heroButton1Text: z.string(),
		heroButton1Link: z.string(),
		heroButton2Text: z.string(),
		heroButton2Link: z.string(),
		heroBackgroundImage: z.string().default(''),
		servicesHeadline: z.string(),
		servicesSubtext: z.string(),
		contactHeadline: z.string(),
		contactSubtext: z.string(),
		footerCopyright: z.string(),
		notdienstLabel: z.string(),
		contactLabel: z.string(),
		phoneLabel: z.string(),
		emailLabel: z.string(),
		addressLabel: z.string(),
		serviceLinkText: z.string(),
		formNameLabel: z.string(),
		formEmailLabel: z.string(),
		formMessageLabel: z.string(),
		formSubmitText: z.string(),
	}),
});

export const collections = { leistungen, firmenprofil, startseite };
