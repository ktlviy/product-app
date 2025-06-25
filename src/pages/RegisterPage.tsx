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
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "@/constants/validationSchemas";
import { registerUser } from "@/services/auth";
import { useState } from "react";
import { initialRegisterValues } from "@/constants/initialValues";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-grey">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center w-full">
            Create your account
          </CardTitle>
        </CardHeader>
        <Formik
          initialValues={initialRegisterValues}
          validationSchema={registerSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setError("");
            try {
              await registerUser({
                name: values.name,
                email: values.email,
                password: values.password,
              });
              navigate("/products");
            } catch (err: any) {
              setError(err.message || "Registration failed");
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
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-destructive text-xs mt-1"
                  />
                </div>
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
                    autoComplete="new-password"
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
                  Sign Up
                </Button>
                <Link to="/login" className="w-full">
                  <Button type="button" className="w-full" variant="link">
                    Already have an account? Sign in
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
