import Index from '@/content/pages/index.mdx'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hero } from '@/components/blocks/Hero';
import { links } from "@/data/links";
import Link from 'next/link'
import {
  LucideMapPin,
  LucideCommand,
  LucideSend,
} from "lucide-react";
import { NavigationMenu } from '@/components/navigation/NavigationMenu';

const actions = [
  {
    id: 'menu',
    label: 'Menu',
    icon: LucideCommand,
  },
  {
    id: 'connect',
    label: 'Connect',
    icon: LucideSend,
  }
]

export default function Home() {
  return (
    <Card className='w-full max-w-105 py-0 gap-0'>
      <CardContent className='p-2'>
        <Index />
      </CardContent>
      <CardFooter className='p-2 gap-2'>
        <NavigationMenu />
        {actions.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            size="sm"
            className="text-xs"
          >
            <item.icon size={10} />
            {item.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
