import { Form, Link } from "react-router-dom";

        return (
            <div className="row justify-content-center">
            <div className="col-8 col-sm-8 col-md-4 col-lg-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="user"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Registra tu contraseña"
                            name="password"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <button variant="primary" type="submit">
                        submit
                    </button>
                </Form>
                <Link to="/register">Registrarse</Link>
            </div>
        </div>
    );
};           