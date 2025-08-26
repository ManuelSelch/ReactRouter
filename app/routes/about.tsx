import { Card } from "@mantine/core";
import type { Route } from "./+types/about";
import cockpit from "lib/cockpit";

type SiteSettings = {
  title: string
}

export async function loader({params}: Route.LoaderArgs) {
  let siteSettings = await cockpit.getSingleton<SiteSettings>("sitesettings");
  let value = siteSettings.title;
  return {value}
}

export default function About({loaderData}: Route.ComponentProps) {
  return (
    <div>
      <p>Hallo Welt: {loaderData.value}</p>
      <Card shadow="lg">My Card</Card>
    </div>
  )
}