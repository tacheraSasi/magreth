import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AuthForm({
  action,
  children,
  defaultEmail = "",
  isRegister = false
}: {
  action: any;
  children: React.ReactNode;
  defaultEmail?: string;
  isRegister?: boolean;
}) {
  return (
    <form action={action} className="flex flex-col gap-4 px-4 sm:px-16">
      <div className="flex flex-col gap-2">
        {isRegister &&
        <>
          <Label
            htmlFor="name"
            className="text-zinc-600 font-normal dark:text-zinc-400"
          >
            Your name
          </Label>

          <Input
            id="name"
            name="name"
            className="bg-muted text-md md:text-sm border-none"
            type="name"
            placeholder="Tachera Sasi"
            autoComplete="name"
            required
          />
        </>
        
        }

        <Label
          htmlFor="email"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Email Address
        </Label>

        <Input
          id="email"
          name="email"
          className="bg-muted text-md md:text-sm border-none"
          type="email"
          placeholder="user@ekilie.com"
          autoComplete="email"
          required
          defaultValue={defaultEmail}
        />

        <Label
          htmlFor="password"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Password
        </Label>

        <Input
          id="password"
          name="password"
          className="bg-muted text-md md:text-sm border-none"
          type="password"
          required
        />
      </div>

      {children}
    </form>
  );
}
