import { signIn, signOut } from "@/auth";

// export default function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server"
//         await signIn("github")
//       }}
//     >
//       <button type="submit">Signin with github</button>
//     </form>
//   )
// }

const SignIn = ({
  provider,
  ...props
}: { provider?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  );
};
export default SignIn;

export const SignOut = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button {...props} type="submit" className="hover:underline underline-offset-2 bg-red-500 cursor-pointer px-4 py-2 rounded-full text-white" >
        Sign Out
      </button>
    </form>
  );
};


