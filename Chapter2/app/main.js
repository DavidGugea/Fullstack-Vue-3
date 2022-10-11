const submissionComponent = {
    template: "<div>Hello World!</div>"
};

const upvoteApp = {
    data() {
        return {
            submissions: seed.submissions
        }
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes;
            });
        }
    }
};

Vue.createApp(upvoteApp).mount("#add");