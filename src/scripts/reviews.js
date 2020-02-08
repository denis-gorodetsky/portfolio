import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
	el:"#review",

	components: {
		Flickity
	},

	data () {
		return {
			reviews: [],
			flickityOptions: {
				initialIndex: 1,
				prevNextButtons: false,
				pageDots: false,
				groupCells: 2
			}
		}
	},

	methods: {
		next() {
			this.$refs.flickity.next();
		},

		previous() {
			this.$refs.flickity.previous();
		},
		arrWithImg(array) {
			return array.map(item => {
				const pic = require(`images/content/reviews/${item.pic}`);
				item.pic = pic;
				return item;
			})
		}
	},
	created() {
		const data = require("../data/reviews.json");
		this.reviews = this.arrWithImg(data);
	}
});