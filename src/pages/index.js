import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Home({ data }) {
	return (
		<Layout>
			<Link to="/" activeStyle={{ color: "red" }}>
				Test Link
			</Link>
			<h1>Lowell EECS Club</h1>
			<p>This is inside layout</p>
			<p>
				More textMore textMore textMore textMore textMore text More textMore textMore text
				More text More textMore textMore textMore texts JKdhkjs hdJKJHGGS GHHJJH fsdlkjklj
			</p>
		</Layout>
	);
}
