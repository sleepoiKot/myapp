import {Meteor} from 'meteor/meteor'
import { HTTP } from 'meteor/http'

const GITHUB_API_VUEJS_COMMITS = 'https://api.github.com/repos/vuejs/vue/commits?per_page=50'

Meteor.startup(() => {
    if (Meteor.isServer) {
        Meteor.methods({
            'get.commits'() {
                const {data} = HTTP.get(GITHUB_API_VUEJS_COMMITS, {
                    headers: {
                        'user-agent': 'node.js'
                    }
                })

                return data && data.length && data.map(d => ({
                    author: d.author && d.author.login || null,
                    commit: d.commit && d.commit.message || null,
                    hash: d.sha || null
                })) || []
            }
        })
    }
})
