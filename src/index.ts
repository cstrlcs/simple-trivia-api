import questions from "./questions"

const port = parseInt(process.env.PORT || "8080")

const getShuffledArray = () => {
	const array = [...questions]

	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}

	return array
}

Bun.serve({
	port,
	fetch(req) {
		const shuffledArray = getShuffledArray().slice(0, 5)
		return new Response(JSON.stringify(shuffledArray), {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
			},
		})
	},
})
