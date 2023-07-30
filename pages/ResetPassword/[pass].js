import ResetPassword from "../../components/resetPassword/ResetPassword";
import { useRouter } from "next/router";

export default function ResetPass() {
  const router = useRouter();
  const { email } = router.query;

  return !email?null:<ResetPassword email={email} />
}
