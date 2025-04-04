package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 寻物启示
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2021-04-26 10:15:35
 */
@TableName("xunwuqishi")
public class XunwuqishiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public XunwuqishiEntity() {
		
	}
	
	public XunwuqishiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 物品名称
	 */
					
	private String wupinmingcheng;
	
	/**
	 * 图片
	 */
					
	private String tupian;
	
	/**
	 * 物品类别
	 */
					
	private String wupinleibie;
	
	/**
	 * 丢失地点
	 */
					
	private String diushididian;
	
	/**
	 * 丢失时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date diushishijian;
	
	/**
	 * 用户名
	 */
					
	private String yonghuming;
	
	/**
	 * 失主姓名
	 */
					
	private String shizhuxingming;
	
	/**
	 * 联系方式
	 */
					
	private String lianxifangshi;
	
	/**
	 * 详细描述
	 */
					
	private String xiangximiaoshu;
	
	/**
	 * 用户id
	 */
					
	private Long userid;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：物品名称
	 */
	public void setWupinmingcheng(String wupinmingcheng) {
		this.wupinmingcheng = wupinmingcheng;
	}
	/**
	 * 获取：物品名称
	 */
	public String getWupinmingcheng() {
		return wupinmingcheng;
	}
	/**
	 * 设置：图片
	 */
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
	/**
	 * 设置：物品类别
	 */
	public void setWupinleibie(String wupinleibie) {
		this.wupinleibie = wupinleibie;
	}
	/**
	 * 获取：物品类别
	 */
	public String getWupinleibie() {
		return wupinleibie;
	}
	/**
	 * 设置：丢失地点
	 */
	public void setDiushididian(String diushididian) {
		this.diushididian = diushididian;
	}
	/**
	 * 获取：丢失地点
	 */
	public String getDiushididian() {
		return diushididian;
	}
	/**
	 * 设置：丢失时间
	 */
	public void setDiushishijian(Date diushishijian) {
		this.diushishijian = diushishijian;
	}
	/**
	 * 获取：丢失时间
	 */
	public Date getDiushishijian() {
		return diushishijian;
	}
	/**
	 * 设置：用户名
	 */
	public void setYonghuming(String yonghuming) {
		this.yonghuming = yonghuming;
	}
	/**
	 * 获取：用户名
	 */
	public String getYonghuming() {
		return yonghuming;
	}
	/**
	 * 设置：失主姓名
	 */
	public void setShizhuxingming(String shizhuxingming) {
		this.shizhuxingming = shizhuxingming;
	}
	/**
	 * 获取：失主姓名
	 */
	public String getShizhuxingming() {
		return shizhuxingming;
	}
	/**
	 * 设置：联系方式
	 */
	public void setLianxifangshi(String lianxifangshi) {
		this.lianxifangshi = lianxifangshi;
	}
	/**
	 * 获取：联系方式
	 */
	public String getLianxifangshi() {
		return lianxifangshi;
	}
	/**
	 * 设置：详细描述
	 */
	public void setXiangximiaoshu(String xiangximiaoshu) {
		this.xiangximiaoshu = xiangximiaoshu;
	}
	/**
	 * 获取：详细描述
	 */
	public String getXiangximiaoshu() {
		return xiangximiaoshu;
	}
	/**
	 * 设置：用户id
	 */
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}

}
