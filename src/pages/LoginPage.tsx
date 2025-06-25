import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/auth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { loginSchema } from "@/constants/validationSchemas";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-grey">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center w-full">
            Sign in to Product App
          </CardTitle>
        </CardHeader>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setError("");
            try {
              await loginUser(values);
              navigate("/products");
            } catch (err: any) {
              setError(err.message || "Login failed");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4 w-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-destructive text-xs mt-1"
                  />
                </div>
                <div>
                  <Field
                    as={Input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-destructive text-xs mt-1"
                  />
                </div>
                {error && (
                  <div className="text-destructive text-xs text-center">
                    {error}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full"
                  variant="secondary"
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
                <Link to="/register" className="w-full">
                  <Button type="button" className="w-full" variant="link">
                    Don't have an account? Sign up
                  </Button>
                </Link>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
