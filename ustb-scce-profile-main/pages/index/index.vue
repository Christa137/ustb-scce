<template>
	
	<input type="text" v-model="value" placeholder="请输入内容" />
	<button @click="changeHandle">{{ sign }}</button>
	<div v-if='show'>
		<view class="content">
		
			<text >北京科技大学 · 计算机与通信工程学院</text>
			<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">教师明细</text>
			<fui-row margin-bottom="24rpx" gutter="16">
				<fui-col  v-for="(teacher,index) in jsonData" :key="index" :span="12" >
					<view class="teacher-simple-card">
						<img @click="handleDetail(index)" :src="teacher.avatar" style="width: 100%; border-radius: 5px 5px 0px 0px;" />
						<text @click="handleDetail(index)" style="font-weight: bold; margin: 8px; ">{{teacher.name}}<br />
						{{teacher.foreignName}}</text>
					</view>
				</fui-col>
			</fui-row>
		
		</view>
	</div>

	
	<view class="content" v-if="!show">
		
			<div v-if="detailData.id == pictureId+1" > 
				
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">个人信息</text>
				<div class="main">
					<fui-row margin-bottom="24rpx" gutter="16">
						<fui-col @click="handleDetail(index)" :span="12" >
							<view class="teacher-simple-card" style="width: 210%;">
								<img :src="detailData.avatar" style="width: auto;height: 370rpx;border-radius: 5px 5px 0px 0px;" />
								<text style=" font-weight: bold; margin: 8px; ">{{detailData.name}}<br />
								{{detailData.foreignName}}</text>
							</view>
						</fui-col>
					</fui-row>
				</div>
				<div class="aside">
					<text style="line-height: 2">
						系所：|<text v-for="(Department,index) in detailData.department">{{Department}}|</text>\n
						职称：<text v-for="(Title,index) in detailData.title" >
						<div v-if="Title!='否'">
						{{Title}}&nbsp
						</div>
						</text>\n
						职务：{{detailData.positions}}\n
						办公地点：{{detailData.officeLocation}}\n
						办公电话：{{detailData.officePhoneNumber}}\n
						电子邮箱：{{detailData.email}}\n
					</text>
				</div>
				<div class="detail">
					<text style="line-height: 2">
						本科课程：{{detailData.undergraduateCourses}}\n
						研究生课程：{{detailData.graduateCourses}}\n
						科研方向：{{detailData.researchDirections}}\n
						学术与社会兼职：{{detailData.partTimeJobs}}\n
					</text>
				</div>
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">简历</text>
				<div>
					<text style="line-height: 2">{{detailData.resume}}</text>
				</div>
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">科研业绩</text>
				<div>
					<text v-for="(Prformance,index) in detailData.performance" style="line-height: 2">{{Performance}}</text>
				</div>
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">获得奖项/专利</text>
				<div>
					<text v-for="(Rewards,index) in detailData.rewards" style="line-height: 2">{{Rewards}}</text>
				</div>
			</div>

	</view>
	
	<view class="content" v-if="!show">
		<div v-for="(teacher,index) in jsonData">
			<div v-if="teacher.name == valueInput" >
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">个人信息</text>
				<div class="main">
					<fui-row margin-bottom="24rpx" gutter="16">
						<fui-col @click="handleDetail(index)" :span="12" >
							<view class="teacher-simple-card" style="width: 210%;">
								<img :src="detailData.avatar" style="width: auto;height: 370rpx;border-radius: 5px 5px 0px 0px;" />
								<text style=" font-weight: bold; margin: 8px; ">{{detailData.name}}<br />
								{{detailData.foreignName}}</text>
							</view>
						</fui-col>
					</fui-row>
				</div>
				<div class="aside">
					<text style="line-height: 2">
						系所：|<text v-for="(Department,index) in detailData.department">{{Department}}|</text>\n
						职称：<text v-for="(Title,index) in detailData.title" >
						<div v-if="Title!='否'">
						{{Title}}&nbsp
						</div>
						</text>\n
						职务：{{detailData.positions}}\n
						办公地点：{{detailData.officeLocation}}\n
						办公电话：{{detailData.officePhoneNumber}}\n
						电子邮箱：{{detailData.email}}\n
					</text>
				</div>
				<div class="detail">
					<text style="line-height: 2">
						本科课程：{{detailData.undergraduateCourses}}\n
						研究生课程：{{detailData.graduateCourses}}\n
						科研方向：{{detailData.researchDirections}}\n
						学术与社会兼职：{{detailData.partTimeJobs}}\n
					</text>
				</div>
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">简历</text>
				<div>
					<text style="line-height: 2">{{detailData.resume}}</text>
				</div>
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">科研业绩</text>
				<div>
					<text v-for="(Prformance,index) in detailData.performance" style="line-height: 2">{{Performance}}</text>
				</div>
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">获得奖项/专利</text>
				<div>
					<text v-for="(Rewards,index) in detailData.rewards" style="line-height: 2">{{Rewards}}</text>
				</div>
				
			</div>
		</div>
	</view>
	
</template>

<script>
	import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
	import fuiRow from "@/components/firstui/fui-row/fui-row.vue"
	import fuiCol from "@/components/firstui/fui-col/fui-col.vue"
	// import firstPage from "./firstPage.vue"
	export default {
		data(){
			return {
				valueInput:"",
				sign:"确定",
				value:"",
				show:true,
				pictureId:-1,
				jsonData:[],
				detailData:{},
				id:-1
			}
		},
		watch:{
			value(newVal,oldVal){
				this.valueInput = newVal;
			}
		},
		components:{
			// firstPage,
			fuiButton,
			fuiRow,
			fuiCol
		},
		methods:{
			changeHandle(){
				this.sign = (this.sign == "确定") ? "返回" : "确定";
				this.show = (this.show == true) ? false : true;
				this.pictureId = (this.sign == "返回") ? -1 : this.pictureId;
				uni.request({
				    url: "http://120.53.84.25:8001/api/v1/faculty/detail/?name=" + this.valueInput,                  
				    method: 'get',
				    dataType: 'json',
				    success: (res) => {
				        
						this.detailData = res.data.data;
						// console.log(res.data.data)
						console.log(this.detailData);
				    },
					fail: (err) => { 
						console.log(res.data);
					}
				});
			},
			handleDetail(index) {
				console.log(index);
				this.pictureId = index;
				console.log(this.pictureId);
				this.show = (this.sign == "确定") ? ((this.show == true) ? false : true) : 0;
				this.sign = (this.sign == "确定") ? "返回" : this.sign;
				uni.request({
				    url: "http://120.53.84.25:8001/api/v1/faculty/detail/" + (this.pictureId + 1),                  
				    method: 'get',
				    dataType: 'json',
				    success: (res) => {
				        
						this.detailData = res.data.data;
						// console.log(res.data.data)
						// console.log(this.detailData);
				    },
					fail: (err) => { 
						console.log(res.data);
					}
				});
			},
		},
		mounted(){
			uni.request({
			    url: "http://120.53.84.25:8001/api/v1/faculty/list",                  
			    method: 'get',
			    dataType: 'json',
			    success: (res) => {
					this.jsonData = res.data.data;
					// console.log(this.jsonData);
			    },
				fail: (err) => {
					console.log(res.data);
				}
			});
		}
	}
</script>

<style>
	.content {
		padding: 8px
	}
	
	.teacher-simple-card {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		min-width: 45%;
		border-radius: 5px;
		box-shadow: 0 2px 4px 1px rgba(0,0,0,.15);
	}
	
	.aside {
	    float: right;
	    width: 58%;
	    height: 287px;
		margin-top: 13px;
		margin: 10px,2px,2px,2px;
		/* border: 5px solid #999;
	    box-sizing: border-box; */
	}
	.main {
	    float: left;
	    width: 40%;
	    height: 300px;
	   /* border: 5px solid #999;
	    box-sizing: border-box; */
	}
	
	.detail {
		width: 100%,
	}
	
</style>
