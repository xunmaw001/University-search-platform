package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.XunwuqishiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.XunwuqishiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.XunwuqishiView;


/**
 * 寻物启示
 *
 * @author 
 * @email 
 * @date 2021-04-26 10:15:35
 */
public interface XunwuqishiService extends IService<XunwuqishiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<XunwuqishiVO> selectListVO(Wrapper<XunwuqishiEntity> wrapper);
   	
   	XunwuqishiVO selectVO(@Param("ew") Wrapper<XunwuqishiEntity> wrapper);
   	
   	List<XunwuqishiView> selectListView(Wrapper<XunwuqishiEntity> wrapper);
   	
   	XunwuqishiView selectView(@Param("ew") Wrapper<XunwuqishiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<XunwuqishiEntity> wrapper);
   	
}

