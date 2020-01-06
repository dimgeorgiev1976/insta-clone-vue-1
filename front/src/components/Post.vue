<template lang="pug">
	.post
		.post__header
			.post__user
				.user
					router-link.user__avatar(:to='`/post/${data.id}/edit`')
						img(:src='data.user.ava', alt='')
					router-link.user__name(:to='`/post/${data.id}/edit`') {{ data.user.name }} {{ data.user.surname }}
			.post__links
				a.edit-link(href='#')
					i.far.fa-trash-alt
					|					 Delete
				a.edit-link(href='edit.html')
					i.fas.fa-pencil-alt
					|					 Edit
		.post__img
			img(:src='data.src', alt='Photo')

		.post__data
			.post__description {{ data.description }}
			.post__hashtags
				template(v-for='tag of data.tags')
					a(href='#', v-bind:key='tag') {{ '#' + tag }}

		.post__comments
			comment(v-for='comment of data.comments', :data='comment', v-bind:key='comment.id')

		.post__comment-form
			.comment-form
				textarea.comment-form__textarea(placeholder='Добавить комментарий')
				button.comment-form__button(disabled='') Опубликовать
</template>

<script>
import Comment from '@/components/Comment'

export default {
	props: ['data'],
	components: {
		Comment
	}
}
</script>