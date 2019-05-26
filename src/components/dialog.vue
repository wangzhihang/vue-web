<template>
    <div class="dialog">
		<el-dialog :title="addTitle" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item :label="name1" :label-width="formLabelWidth">
					<el-input v-model="form.value1" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item :label="name2" :label-width="formLabelWidth" v-show="name2">
					<el-input v-model="form.value2" autocomplete="off"></el-input>
				</el-form-item>
                <el-form-item :label="name3" :label-width="formLabelWidth" v-show="name3">
					<el-input v-model="form.value3" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item :label="name4" :label-width="formLabelWidth" v-show="name4">
					<el-input v-model="form.value4" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="closePopDialog">取 消</el-button>
				<el-button type="primary" @click="closePopDialog">确 定</el-button>
			</div>
		</el-dialog>
		
    </div>
</template>

<script>
	
    export default {
    	data(){
    		return {
                 form:{
                    value1:'',
                    value2:'',
                    value3:'',
                    value4:''
                },
                formLabelWidth: '100px'
    		}
        },
        props:["dialogFormVisible","addTitle","name1","name2","name3","name4"],
        mounted(){
            // console.log('addTitle=='+this.$parent.addTitle)
            // this.title=addTitle;
        },
    	created(){
    	},
    	computed: {
    		
    	},
		methods: {
			closePopDialog(){
                this.$store.commit("dialogCtrol");
                this.$emit("closeDialog");
            }
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
</style>
