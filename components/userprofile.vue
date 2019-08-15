<template>
	<view class="card-control" :style="{width: screenWidth+'px'}">
		<view class="card-bg  bg-gradual-green text-white">
			<view class="card-content">
				<view class="padding text-xxl text-cut">
					<view>您好</view>
					<text>{{userInfo.nickname}}</text>
				</view>
				<view class="padding text-xl text-cut">
					<view>当前身份</view>
					<text>
						{{level[getValidData]['text']}}
						<!-- {{user.isvalid==true?'认证用户':'访客'}} -->
					</text>
				</view>
				<view>

				</view>
			</view>
			<view class="card-function flex justify-around">
				<block v-if="isvalid">
					<view v-for="(item,index) in data3" class="item">
						<text :class="'cuIcon-'+item.icon"></text>
						{{item.text}}
					</view>
				</block>
				<block v-else>

					<view @click="toValid()" class="item flex justify-center">
						<text class="cuIcon-profile margin-right-xs"></text>
						{{level[getValidData]['validtext']}}
					</view>
				</block>

				<!-- <uni-grid :show-border="false"  :options="data3" type="oblong" /> -->
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'

	export default {
		computed: {
			...mapState(['userInfo', 'point', 'isTencent']),
			...mapGetters(['getValidData']),
		},
		props: {
			user: {
				type: Object,
				default: {
					nickname: '未认证用户',
					isvalid: false
				}
			},
		},
		data() {
			// '访客','微信认证','学生认证'
			return {
				level: [{ text: '访客', validtext: '点我登录' },
					{ text: '微信登录', validtext: '点我认证' },
					{ text: '学生认证', validtext: '点我登录' }
				],
				data3: [{
						icon: 'icon',
						text: '学历'
					},
					{
						icon: 'friendfill',
						text: '学校'
					},
					{
						icon: 'peoplefill',
						text: '性别'
					},

				],
				screenWidth: this.screenWidth,
				screenHeight: this.screenHeight,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
			}
		},
		mounted() {
			console.log(this.screenWidth)
		},
		methods: {
			toValid() {
				console.log('tovalid')
				uni.navigateTo({
											url: '../login/login'
										});
			}
		},
	}
</script>

<style>
	.card-function {

		padding: 30upx 30upx 0 30upx;
	}

	.card-function .item {}

	.card-content {
		justify-content: space-between;
		display: flex;
		border-bottom: 1px solid #dbdbdb;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
	}

	.card-title {
		font-size: 70upx;
		margin-top: 20upx;
		margin-left: 20upx;
	}

	.card-control {
		padding: 20upx;
	}

	.card-id {
		padding: 10upx;
	}

	.card-bg {

		padding: 10upx;
		border-radius: 20upx 20upx;
		min-height: 300upx;
		background-color: #ffffff;
	}
</style>
