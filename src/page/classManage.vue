<template>
    <div class="fillcontain">
        <head-top></head-top>
        <el-row class="rowHeight rowContain">
			<el-col :span="4">
				<div class="grid-content bg-purple">
					<el-tree :props="props" :load="loadNode1" lazy default-expand-all @node-click="handleNodeClick"></el-tree>
				</div>
			</el-col>
			<el-col :span="20"><div class="grid-content bg-purple-light">456</div></el-col>
		</el-row>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {
        data(){
            return {
                props: {
                    label: 'name',
                    isLeaf: 'leaf'
                },
            }
        },
        created(){
            // this.initData();
        },
    	components: {
    		headTop,
    	},
        methods: {
            loadNode1(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: '类管理' }]);
                }
                if (node.level > 1) return resolve([]);
                //根据接口获取对象列表，拿出每个列表的name，重组数组
                let data=[
                    {'id':1,name:'类1',text:'树形结构',},
                    {'id':2,name:'类2',text:'树形结构'},
                    {'id':3,name:'类3',text:'树形结构'},
                    {'id':4,name:'类4',text:'树形结构'}
                ]

                // const data=[];
                // for(var i in list){
                //     data.push({'name':list[i].name,'leaf':true})
                // }

                // const data = [{name: '对象1',leaf: true}, {name: '对象2',leaf:true}];
                resolve(data);
            },
             handleNodeClick(data) {
                console.log(data.name);
            }
            // async initData(){
            //     try{
            //         this.city = await cityGuess();
            //         const countData = await getResturantsCount();
            //         if (countData.status == 1) {
            //             this.count = countData.count;
            //         }else{
            //             throw new Error('获取数据失败');
            //         }
            //         this.getResturants();
            //     }catch(err){
            //         console.log('获取数据失败', err);
            //     }
            // },
            // async getCategory(){
            //     try{
            //         const categories = await foodCategory();
            //         categories.forEach(item => {
            //             if (item.sub_categories.length) {
            //                 const addnew = {
            //                     value: item.name,
            //                     label: item.name,
            //                     children: []
            //                 }
            //                 item.sub_categories.forEach((subitem, index) => {
            //                     if (index == 0) {
            //                         return
            //                     }
            //                     addnew.children.push({
            //                         value: subitem.name,
            //                         label: subitem.name,
            //                     })
            //                 })
            //                 this.categoryOptions.push(addnew)
            //             }
            //         })
            //     }catch(err){
            //         console.log('获取商铺种类失败', err);
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
