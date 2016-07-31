<template lang="pug">
	div.col-xs-10
		div.panel.panel-info
			div.panel-heading 用户管理
			div.panel-body
				div.row
					div.col-xs-12
						div.input-group.pull-right
							input.form-control(placeholder="搜索用户",v-model="searchNickname")
							span.input-group-addon
								span.glyphicon.glyphicon-search
				div.row
					div.col-xs-12
						table.table
							thead
								tr
									td 序号
									td 用户昵称
									td 用户金币
									td 注册时间
									td
									td
							tbody
								tr(v-for="user in userList | filterBy searchNickname in 'nickname'| limitBy pagenum pageindex*pagenum ",track-by="$index")
									td(v-html="$index+1")
									td(v-html="user.nickname")
									td(v-html="user.money")
									td(v-html="user.createdAt | date")
									td
										a.btn.btn-default(@click="showSetMoney(user)",data-toggle="modal",data-target="#myModal") 设置金钱
									td
										a.btn.btn-default 删除 
			div.panel-footer
				div.btn-toolbar(role="toolbar" aria-label="...")
					div.btn-group
						a.btn(v-for="1 in (userList.length/pagenum)",v-html="$index+1",@click="changePage($index)")
	div#mymodel.modal.fade(v-el:model)
		div.modal-dialog
			div.modal-content
				div.modal-header
					button.close(data-dismiss="modal",aria-label="Close")
						span(aria-hidden="true") &times;
					h4.modal-title(v-html="setUser.nickname")
				div.modal-body
					input.form-control(v-model="setUser.money")
				div.modal-footer
					button.btn.btn-default(data-dismiss="modal") 关闭
					button.btn.btn-primary(@click="updateUser") 确认修改
</template>
<script>
export default {
    ready() {
            // this.$http.get('getUserInfoList').then((res) => {
            //     this.userList = res.data
            // }, (res) => {
            //     console.log(res.data)
            // })
        },
        data() {
            return {
                searchNickname: '',
                setUser: {},
                userList: require('../../data/userinfo'),
                pageindex: 0,
                pagenum: 20
            }
        },
        methods: {
            changePage(event) {
                this.pageindex = event
            },
            updateUser() {
                this.$http.post('updateuserinfo', {
                    'createdAt': this.setUser.createdAt,
                    'money': this.setUser.money,
                    'nickname': this.setUser.nickname,
                    'openid': this.setUser.openid
                }).then((res) => {
                    console.log(res.data)
                }, (res) => {
                    console.log(res)
                })
            },
            showSetMoney(user) {
                this.setUser = user
                $(this.$els.model).modal('show')
            }
        }
}
</script>
