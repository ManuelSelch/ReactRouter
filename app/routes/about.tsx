import { Card } from "@mantine/core";
import type { Route } from "./+types/about";


export async function loader({params}: Route.LoaderArgs) {
  let value = params.id;
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
