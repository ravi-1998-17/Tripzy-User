import React from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let data;

      if (isLogin) {
        data = await signIn(form.email, form.password);
      } else {
        data = await signUp(form.email, form.password);
      }

      dispatch(
        login({
          token: data.idToken,
          userId: data.localId,
          email: form.email,
        })
      );

      navigate("/");
    } catch (err) {
      alert("Failed! " + err.response?.data?.error?.message);
    }
  }

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4 text-center">{isLogin ? "Login" : "Register"}</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="danger" className="w-100 mb-3">
          {isLogin ? "Login" : "Register"}
        </Button>

        <p className="text-center">
          {isLogin ? "Don't have an account?" : "Already registered?"}
          <span
            className="text-danger ms-2"
            style={{ cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </Form>
    </Container>
  );
}

export default Login;
