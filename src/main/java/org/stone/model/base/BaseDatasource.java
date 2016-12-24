package org.stone.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseDatasource<M extends BaseDatasource<M>> extends Model<M> implements IBean {

	public static final String tableName = "datasource";

	public void setGuid(java.lang.String guid) {
		set("guid", guid);
	}

	public java.lang.String getGuid() {
		return get("guid");
	}

	public void setSourceName(java.lang.String sourceName) {
		set("sourceName", sourceName);
	}

	public java.lang.String getSourceName() {
		return get("sourceName");
	}

	public void setUrl(java.lang.String url) {
		set("url", url);
	}

	public java.lang.String getUrl() {
		return get("url");
	}

	public void setUserName(java.lang.String userName) {
		set("userName", userName);
	}

	public java.lang.String getUserName() {
		return get("userName");
	}

	public void setPassword(java.lang.String password) {
		set("password", password);
	}

	public java.lang.String getPassword() {
		return get("password");
	}

	public void setType(java.lang.String type) {
		set("type", type);
	}

	public java.lang.String getType() {
		return get("type");
	}

}