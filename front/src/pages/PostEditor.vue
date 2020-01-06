<template lang="pug">
	.container(v-if='post')
		.post
			.post__header
				.post__user
					.user
						a.user__avatar(href='#')
							img(:src='post.user.ava', alt='')
						a.user__name(href='#')
							| {{ post.user.name }} {{ post.user.surname }}
				.post__links
			.post__img
				img(src='/img/posts/man-in-forest.jpg', alt='Photo')
			.post__edit
				.post__edit-name Описание:
				.post__edit-textarea-wrapper
					textarea.post__edit-textarea
						| Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat, aliquam! In fugit id sint, nam repellendus possimus sit itaque aspernatur modi facere earum mollitia veritatis officia quo iste nisi.
			.post__edit
				.post__edit-name Хэштеги:
				.post__edit-textarea-wrapper
					textarea.post__edit-textarea #forest #travel #journey #holiday
			.post__buttons
				button.btn.btn--save Сохранить
				button.btn.btn--cancel Отмена

</template>

<script>
export default {
	async created () {
		this.post = await this.$store.dispatch('getPostById', this.postId)
	},
	
	data () {
		return {
			post: null
		}
	},

	computed: {
		postId () {
			return parseInt(this.$route.params.id)
		}
	}
}
</script>