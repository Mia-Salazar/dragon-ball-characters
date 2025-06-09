import { useState } from "react";

import { Input, Layout } from "../../components";

const Home = () => {
    const [form, setForm] = useState({name: ''})

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: event.target.value });
    };

    return (
        <Layout>
            <h2>What Dragon Ball character are you looking for?</h2>
            <form>
                <Input id="name" placeholder="Goku" text="Search by name" value={form.name} onChange={handleChangeName} />
            </form>

        </Layout>
    );
};

export default Home;