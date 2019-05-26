<template>
    <div class="fillcontain">
        <head-top></head-top>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {
        data(){
            return {
                
            }
        },
        created(){
        	// this.restaurant_id = this.$route.query.restaurant_id;
            // this.initData();
        },
        computed: {
        	// specs: function (){
        	// 	let specs = [];
        	// 	if (this.selectTable.specfoods) {
	        // 		this.selectTable.specfoods.forEach(item => {
	        // 			specs.push({
	        // 				specs: item.specs_name,
	        // 				packing_fee: item.packing_fee,
	        // 				price: item.price,
	        // 			})
	        // 		})
        	// 	}
        	// 	return specs
        	// }
        },
    	components: {
    		headTop,
    	},
        methods: {
            // async initData(){
            //     try{
            //         const countData = await getFoodsCount({restaurant_id: this.restaurant_id});
            //         if (countData.status == 1) {
            //             this.count = countData.count;
            //         }else{
            //             throw new Error('获取数据失败');
            //         }
            //         this.getFoods();
            //     }catch(err){
            //         console.log('获取数据失败', err);
            //     }
            // },
            
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .table_container{
        padding: 20px;
    }
    .Pagination{
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>
