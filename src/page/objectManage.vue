<template>
    <div class="fillcontain">
        <head-top></head-top>
        <el-row class="rowHeight rowContain">
			<el-col :span="4">
				<div class="grid-content bg-purple">
					<el-tree :props="props" :load="loadNode1" lazy default-expand-all></el-tree>
				</div>
			</el-col>
			<el-col :span="20">
                <div class="grid-content bg-purple-light">
                    <tinymce :height=400 ref="editor"></tinymce> 
                </div>
            </el-col>
		</el-row>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import tinymce from '../components/tinymce'
    
    export default {
        data(){
            return {
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
            }
        },
    	components: {
            headTop,
            tinymce
    	},
        created(){
            // this.initData();
        },
        methods: {
            loadNode1(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: '对象管理' }]);
                }
                if (node.level > 1) return resolve([]);
                //根据接口获取对象列表，拿出每个列表的name，重组数组
                let list=[
                    {'id':1,name:'对象1',text:'树形结构'},
                    {'id':2,name:'对象2',text:'树形结构'},
                    {'id':3,name:'对象3',text:'树形结构'},
                    {'id':4,name:'对象4',text:'树形结构'}
                ]
                const data=[];
                for(var i in list){
                    data.push({'name':list[i].name,'leaf':true})
                }
                // const data = [{name: '对象1',leaf: true}, {name: '对象2',leaf:true}];
                resolve(data);
            }
            // async initData(){
            //     try{
            //         const countData = await getUserCount();
            //         if (countData.status == 1) {
            //             this.count = countData.count;
            //         }else{
            //             throw new Error('获取数据失败');
            //         }
            //         this.getUsers();
            //     }catch(err){
            //         console.log('获取数据失败', err);
            //     }
            // },
            // handleSizeChange(val) {
            //     console.log(`每页 ${val} 条`);
            // },
            // handleCurrentChange(val) {
            //     this.currentPage = val;
            //     this.offset = (val - 1)*this.limit;
            //     this.getUsers()
            // },
            // async getUsers(){
            //     const Users = await getUserList({offset: this.offset, limit: this.limit});
            //     this.tableData = [];
            //     Users.forEach(item => {
            //         const tableData = {};
            //         tableData.username = item.username;
            //         tableData.registe_time = item.registe_time;
            //         tableData.city = item.city;
            //         this.tableData.push(tableData);
            //     })
            // }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
</style>
